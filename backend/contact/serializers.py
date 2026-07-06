from rest_framework import serializers


class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    company = serializers.CharField(max_length=150, required=False, allow_blank=True)
    message = serializers.CharField(max_length=2000)