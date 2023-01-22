class Solution:
    def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:
        if not ops:
            return m * n
        a = sorted(ops, key=lambda x: x[0])
        b = sorted(ops, key=lambda x: x[1])
        return a[0][0] * b[0][1]
