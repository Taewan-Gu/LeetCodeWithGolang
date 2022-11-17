class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        j = 0
        for i in s:
            while True:
                if j == len(t):
                    return False
                if t[j] == i:
                    j += 1
                    break
                j += 1

        return True