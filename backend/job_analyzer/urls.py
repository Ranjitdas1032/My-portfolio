from django.urls import path
from .views import JobAnalyzerView

urlpatterns = [
    path("", JobAnalyzerView.as_view(), name="job-analyzer"),
]