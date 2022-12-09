class Solution:
    def checkRecord(self, s: str) -> bool:
        a, l = 0, 0
        for i in s:
            if i == "A":
                a += 1
            if i == "L":
                l += 1
            else:
                l = 0
            if l == 3 or a == 2:
                return False
        return True