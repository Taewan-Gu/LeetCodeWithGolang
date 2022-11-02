class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        a = dict()
        b = s.split()
        if len(pattern) != len(b):
            return False
        c = dict()
        for i in range(len(pattern)):
            if a.get(pattern[i]):
                if a.get(pattern[i]) != b[i]:
                    return False
            else:
                if not c.get(b[i]):
                    c[b[i]] = True
                    a[pattern[i]] = b[i]
                else:
                    return False
        return True