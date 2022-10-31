# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        s, e = 1, 2**31 - 1
        mid = 2**30 - 1
        while s < e:
            if isBadVersion(mid):
                e = mid
            else:
                s = mid + 1
            mid = (s + e) // 2
        
        return s