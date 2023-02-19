class Solution:
    def countAndSay(self, n: int) -> str:
        s = "1"
        tmp = ""
        for i in range(n-1):
            cnt = 0
            for j in range(len(s)):
                cnt += 1
                st = (str(cnt), s[j])
                if len(s)-1 != j and s[j+1] != s[j]:
                    cnt = 0
                    tmp += st[0] + st[1]
                    st = None
            else:
                if st:
                    tmp += st[0] + st[1]
            s = tmp
            tmp = ""
        
        return s
