class Solution:
    def arrangeCoins(self, n: int) -> int:
        for i in range(1, 10 ** 5):
            n -= i
            if n == 0: return i
            if n < 0: return i - 1