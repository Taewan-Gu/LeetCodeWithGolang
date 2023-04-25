class Solution:
    def isMatchDivied(self, s: str, p: str, i: int, j: int) -> bool:
        while j < len(p) and i < len(s):
            if j+1 < len(p) and p[j+1] == "*":
                for ii in range(i, len(s)):
                    if p[j] != "." and p[j] != s[ii]:
                        break
                else:
                    ii += 1
                for iii in range(i, ii+1):
                    if self.isMatchDivied(s, p, iii, j+2):
                        return True
                break
            if p[j] == "." or p[j] == s[i]:
                i += 1
                j += 1
            else:
                return False
        
        if i == len(s):
            while j < len(p):
                if j+1 < len(p) and p[j+1] == "*":
                    j += 2
                else:
                    break
            if j == len(p):
                return True
        return False

    def isMatch(self, s: str, p: str) -> bool:
        dic = dict()
        for si in s:
            dic[si] = True
        for i in range(len(p)):
            dic[p[i]] = False
        if dic.get(".") != False:
            for v in dic.values():
                if v:
                    return False

        return self.isMatchDivied(s, p, 0, 0)
