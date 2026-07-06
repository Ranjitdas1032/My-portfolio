from django.conf import settings
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import ContactSerializer


class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        data = serializer.validated_data

        name = data["name"]
        email = data["email"]
        company = data.get("company", "Not provided")
        message = data["message"]

        owner_subject = f"New Portfolio Contact Request from {name}"

        owner_body = f"""
New contact request received from your AI Portfolio OS.

Name: {name}
Email: {email}
Company: {company}

Message:
{message}
"""

        user_subject = "Thanks for contacting me"

        user_body = f"""
Hi {name},

Thanks for reaching out through my portfolio.

I have received your message and will get back to you soon.

Your message:
{message}

Best regards,
Ranjit Das
"""

        try:
            send_mail(
                subject=owner_subject,
                message=owner_body,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.OWNER_EMAIL],
                fail_silently=False,
            )

            send_mail(
                subject=user_subject,
                message=user_body,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[email],
                fail_silently=False,
            )

            return Response(
                {"message": "Contact request sent successfully."},
                status=status.HTTP_200_OK,
            )

        except Exception as e:
            return Response(
                {"error": "Email sending failed.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )