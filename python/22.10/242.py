class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        a, b = sorted(list(s)), sorted(list(t))
        if len(a) != len(b):
            return False
        for i in range(len(s)):
            if a[i] != b[i]:
                return False
        return True