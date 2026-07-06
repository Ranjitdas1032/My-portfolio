import requests

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class LeetCodeStatsView(APIView):
    def get(self, request, username):
        url = "https://leetcode.com/graphql/"

        query = """
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              realName
              userAvatar
              ranking
              reputation
            }
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
        }
        """

        payload = {
            "query": query,
            "variables": {
                "username": username
            }
        }

        headers = {
            "Content-Type": "application/json",
            "Referer": "https://leetcode.com",
            "User-Agent": "Mozilla/5.0",
        }

        try:
            response = requests.post(url, json=payload, headers=headers, timeout=10)
            response.raise_for_status()

            result = response.json()
            matched_user = result.get("data", {}).get("matchedUser")

            if not matched_user:
                return Response(
                    {"error": "LeetCode user not found"},
                    status=status.HTTP_404_NOT_FOUND,
                )

            stats = matched_user["submitStatsGlobal"]["acSubmissionNum"]

            formatted_stats = {
                "username": matched_user["username"],
                "realName": matched_user["profile"].get("realName"),
                "avatar": matched_user["profile"].get("userAvatar"),
                "ranking": matched_user["profile"].get("ranking"),
                "reputation": matched_user["profile"].get("reputation"),
                "totalSolved": stats[0]["count"],
                "easySolved": stats[1]["count"],
                "mediumSolved": stats[2]["count"],
                "hardSolved": stats[3]["count"],
                "profileUrl": f"https://leetcode.com/u/{username}/",
            }

            return Response(formatted_stats, status=status.HTTP_200_OK)

        except requests.RequestException as e:
            return Response(
                {
                    "error": "Failed to fetch LeetCode data",
                    "details": str(e),
                },
                status=status.HTTP_502_BAD_GATEWAY,
            )