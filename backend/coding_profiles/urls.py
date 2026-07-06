from django.urls import path
from .views import LeetCodeStatsView

urlpatterns = [
    path("leetcode/<str:username>/", LeetCodeStatsView.as_view(), name="leetcode-stats"),
]