class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        time = time%((n-1) * 2)
        if time >= n :
            return 2 * n - 1 - time
        return 1 + time
