from rest_framework import serializers


class JobAnalyzerSerializer(serializers.Serializer):
    pdf = serializers.FileField()

    def validate_pdf(self, file):
        if not file.name.endswith(".pdf"):
            raise serializers.ValidationError("Only PDF files are allowed.")

        if file.size > 5 * 1024 * 1024:
            raise serializers.ValidationError("PDF size must be under 5MB.")

        return file