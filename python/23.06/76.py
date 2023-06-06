class Solution:
    def minWindow(self, s: str, t: str) -> str:
        si, ei = 0, 0
        check = collections.defaultdict(int)
        remaining = collections.defaultdict(int)
        for i in t:
            check[i] += 1
        complete = len(t)
        ans = []
        while si != len(s) and ei != len(s):
            if complete == 0:
                ans.append((si, ei))
                if remaining[s[si]] < 0:
                    remaining[s[si]] += 1
                elif check.get(s[si]) == 0:
                    check[s[si]] += 1
                    complete += 1
                else:
                    remaining[s[si]] += 1
                si += 1
            else:
                if check.get(s[ei]):
                    check[s[ei]] -= 1
                    complete -= 1
                else:
                    remaining[s[ei]] -= 1
                ei += 1
        else:
            if complete == 0:
                ans.append((si, ei))
            while si != len(s):
                if remaining[s[si]] < 0:
                    remaining[s[si]] += 1
                elif check.get(s[si]) == 0:
                    check[s[si]] += 1
                    complete += 1
                else:
                    remaining[s[si]] += 1
                if complete == 0:
                    ans.append((si+1, ei))
                si += 1
        ans.sort(key=lambda x:x[1] - x[0])
        
        return s[ans[0][0]:ans[0][1]] if ans else ""
                
