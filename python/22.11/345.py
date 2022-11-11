class Solution:
    def reverseVowels(self, s: str) -> str:
        c = []
        v = []
        vows = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        for i in s:
            c.append(i)
            if i in vows:
                v.append(i)
        
        ans = ""
        for i in c:
            if i in vows:
                ans += v.pop()
            else:
                ans += i
        
        return ans
                