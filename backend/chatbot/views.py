import requests

from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import ChatbotSerializer
from .knowledge_base import PORTFOLIO_KNOWLEDGE


PORTFOLIO_CONTEXT = """
You are an AI assistant for a developer portfolio.

Developer skills:
- React
- Django
- Django REST Framework
- Redux Toolkit
- Cypress
- Docker
- GitHub CI/CD
- RAG
- LangChain
- Python
- REST APIs
- Redis

Projects:
- AI Crop Recommendation System
- Movie Recommendation System
- Employee Dashboard
- SEO Command Center
- Django TODO CRUD

Behavior:
- Answer as a professional portfolio assistant.
- Help recruiters understand candidate fit.
- Keep answers short, clear, and confident.
- If asked about unknown personal details, say the portfolio owner has not provided that information yet.
"""


class ChatbotView(APIView):
    def post(self, request):
        serializer = ChatbotSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        user_message = serializer.validated_data["message"]

        if not settings.AI_API_KEY:
            return Response(
                {"error": "AI_API_KEY is missing in backend .env"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        payload = {
            "model": settings.AI_MODEL,
            "messages": [
                {
                    "role": "system",
                    "content": PORTFOLIO_KNOWLEDGE,
                },
                {
                    "role": "user",
                    "content": user_message,
                },
            ],
            "temperature": 0.3,
            "max_tokens": 350,
        }

        headers = {
            "Authorization": f"Bearer {settings.AI_API_KEY}",
            "Content-Type": "application/json",
        }

        try:
            ai_response = requests.post(
                settings.AI_BASE_URL,
                json=payload,
                headers=headers,
                timeout=30,
            )

            ai_response.raise_for_status()
            data = ai_response.json()

            answer = data["choices"][0]["message"]["content"]

            return Response(
                {
                    "answer": answer,
                    "provider": settings.AI_PROVIDER,
                    "model": settings.AI_MODEL,
                },
                status=status.HTTP_200_OK,
            )

        except requests.RequestException as e:
            return Response(
                {
                    "error": "AI request failed",
                    "details": str(e),
                },
                status=status.HTTP_502_BAD_GATEWAY,
            )