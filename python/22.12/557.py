class Solution:
    def reverseWords(self, s: str) -> str:
        ans = ""
        for i in s.split():
            ans += "".join(reversed(i)) + " "

        return ans.rstrip()