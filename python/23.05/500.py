class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        a = "qwertyuiop"
        b = "asdfghjkl"
        c = "zxcvbnm"
        ans = []
        for w in words:
            word = w.lower()
            check = None
            if word[0] in a:
                check = 1
            if word[0] in b:
                check = 2
            if word[0] in c:
                check = 3
            for ch in word:
                if ch in a and check != 1:
                    break
                if ch in b and check != 2:
                    break
                if ch in c and check != 3:
                    break
            else:
                ans.append(w)
        
        return ans
