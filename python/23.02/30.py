class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        wlen = len(words[0])
        wdic = collections.defaultdict(int)
        for word in words:
            wdic[word] += 1
        dic = collections.defaultdict(int)
        ans = []

        i, start = 0, 0
        while i < len(s) - wlen + 1:
            j = 0
            word = ""
            while j < wlen:
                word += s[i + j]
                j += 1
            i += 1
            if wdic.get(word) and wdic.get(word) != dic.get(word):
                dic[word] += 1
                i += wlen - 1
            else:
                i = start + 1
                start = i
                dic.clear()
            
            if sum(wdic.values()) == sum(dic.values()):
                ans.append(start)
                i = start + 1
        
        return ans
