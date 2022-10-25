class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        ss = [s[:i+1] for i in range(len(s)//2)]
        for i in ss:
            j = 0
            while True:
                if len(i)*(j+1) > len(s):
                    break
                if i == s[len(i)*j:len(i)*(j+1)]:
                    if len(i)*(j+1) == len(s):
                        return True
                    else:
                        j += 1
                else:
                    break
        return False