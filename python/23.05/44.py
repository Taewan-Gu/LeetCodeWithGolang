class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        if not p and not s:
            return True
        if not p:
            return False
        if s and s[-1] != p[-1] and p[-1] not in ["?", "*"]:
            return False
        for i in range(1, len(s)):
            if s[i-1] != s[i]:
                break
        else:
            idx = 0
            for i in range(len(p)):
                if p[i] != "*":
                    break
            else:
                i += 1
            tmp = p[:i]
            pp = p.lstrip("*")
            for i in pp:
                if idx != len(s) and i == s[idx]:
                    idx += 1
                else:
                    break
            s = s[idx:]
            p = tmp + pp[idx:]
        dp = [[] for i in range(len(s)+1)]
        dp[0].append(-1)
        if not p and not s:
            return True
        if not p:
            return False
        for i in range(len(p)):
            if p[i] != "*":
                break
            dp[0].append(i)
        else:
            return True

        for j in range(len(p)):
            before = j - 1
            for i in range(1, len(dp)):
                if p[j] == "*" and (before in dp[i-1] or j in dp[i-1] or before in dp[i]):
                    dp[i].append(j-1)
                    dp[i].append(j)
                if before not in dp[i-1]:
                    continue
                if p[j] == "?" or p[j] == s[i-1]:
                    dp[i].append(j)

        return True if len(p)-1 in dp[-1] else False
