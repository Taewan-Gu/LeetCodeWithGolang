class Solution:
    def findTheLongestBalancedSubstring(self, s: str) -> int:
        one, zero, ans = 0, 0, 0
        for i in s:
            if i == "0":
                if one:
                    zero = 0
                zero += 1
                one = 0
            if i == "1":
                one += 1
                ans = max(ans, min(zero, one) * 2)
        return ans
