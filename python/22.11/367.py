class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num ** 0.5 % 1:
            return False
        return True