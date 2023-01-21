class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.strip()
        nums = list(map(str, range(0,10)))
        ans = ""
        ch = False
        ss = 0
        for i in range(len(s)):
            if s[i] in nums:
                if not ch and i > 0 and s[i-1] == "-":
                    ans = "-"
                ans += s[i]
                ch = True
                ss = 0
            elif ch:
                break
            elif s[i] == "-" or s[i] == "+":
                ss+=1
                if ss == 2:
                    return 0
            else:
                return 0
        
        if ans == "":
            return 0
        
        return -2147483648 if int(ans) < -2147483648 else (int(ans) if 2147483647 > int(ans) else 2147483647)
