class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        #### 변수 선언 ####
        wordLength = len(words[0])
        allWordsLength = len(words) * wordLength
        constDic = collections.defaultdict(int)
        for word in words:
            constDic[word] += 1
        ans = dict()
        i = 0

        while i < len(s) - wordLength + 1:
            #### 초기화 ####
            start = i
            arr = deque([])
            dic = collections.defaultdict(int)
            
            #### 제외 조건 ####
            if ans.get(i):
                i += 1
                continue
            if len(s) - i < allWordsLength:
                break

            #### 로직 ####    
            while start < len(s) - wordLength + 1:
                word = "".join([s[j] for j in range(start, start+wordLength)])
                arr.append(word)
                dic[word] += 1
                if constDic[word] < dic[word]:
                    break
                start += wordLength
                if i + allWordsLength == start:
                    ans[i] = True
                    si = i
                    while start < len(s) - wordLength + 1:
                        dic[arr.popleft()] -= 1
                        word = "".join([s[j] for j in range(start, start+wordLength)])
                        dic[word] += 1
                        arr.append(word)
                        if constDic[word] < dic[word]:
                            break
                        start += wordLength
                        si += wordLength
                        ans[si] = True
                    break
            i += 1
        
        return ans.keys()
