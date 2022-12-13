class Solution:
    def greatestLetter(self, s: str) -> str:
        dic = dict()
        ans = set()
        for i in s:
            if 64 < ord(i) < 91:
                dic[i] = True
                if dic.get(chr(ord(i) + 32)):
                    ans.add(i)
            if 96 < ord(i) < 123:
                dic[i] = True
                if dic.get(chr(ord(i) - 32)):
                    ans.add(chr(ord(i) - 32))
        try:
            return list(sorted(list(ans)))[-1]
        except:
            return ""