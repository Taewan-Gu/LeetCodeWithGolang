class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        def removeBySharp(s):
            res = []
            for i in range(len(s)):
                if s[i] != "#":
                    res.append(s[i])
                elif res:
                    res.pop()
            return "".join(res)
        return removeBySharp(s) == removeBySharp(t)
