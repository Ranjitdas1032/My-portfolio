from io import BytesIO
import requests

from django.conf import settings
from pypdf import PdfReader
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import JobAnalyzerSerializer
from chatbot.knowledge_base import PORTFOLIO_KNOWLEDGE


class JobAnalyzerView(APIView):
    def post(self, request):
        serializer = JobAnalyzerSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        pdf_file = serializer.validated_data["pdf"]

        try:
            pdf_bytes = pdf_file.read()
            reader = PdfReader(BytesIO(pdf_bytes))

            extracted_text = ""

            for page in reader.pages:
                page_text = page.extract_text() or ""
                extracted_text += page_text + "\n"

            extracted_text = extracted_text.strip()

            if not extracted_text:
                return Response(
                    {
                        "error": "No readable text found in PDF.",
                        "hint": "This PDF may be scanned/image-based. OCR can be added later.",
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

            ai_result = self.analyze_with_ai(extracted_text)

            return Response(
                {
                    "message": "Job description analyzed successfully.",
                    "filename": pdf_file.name,
                    "pages": len(reader.pages),
                    "textLength": len(extracted_text),
                    "analysis": ai_result,
                },
                status=status.HTTP_200_OK,
            )

        except Exception as e:
            return Response(
                {
                    "error": "Job analysis failed.",
                    "details": str(e),
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def analyze_with_ai(self, job_description):
        prompt = f"""
Compare this job description with the candidate portfolio.

Candidate Portfolio:
{PORTFOLIO_KNOWLEDGE}

Job Description:
{job_description[:7000]}

Return response in this exact format:

Match Score: <number>%

Strong Matches:
- ...

Missing / Weak Areas:
- ...

Why Candidate Fits:
...

Recommendation:
...
"""

        payload = {
            "model": settings.AI_MODEL,
            "messages": [
                {
                    "role": "system",
                    "content": "You are an expert technical recruiter and AI resume evaluator.",
                },
                {
                    "role": "user",
                    "content": prompt,
                },
            ],
            "temperature": 0.2,
            "max_tokens": 700,
        }

        headers = {
            "Authorization": f"Bearer {settings.AI_API_KEY}",
            "Content-Type": "application/json",
        }

        response = requests.post(
            settings.AI_BASE_URL,
            json=payload,
            headers=headers,
            timeout=40,
        )

        response.raise_for_status()
        data = response.json()

        return data["choices"][0]["message"]["content"]