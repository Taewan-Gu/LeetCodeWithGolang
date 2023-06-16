class Solution:
    def oddString(self, words: List[str]) -> str:
        diff_arr = []
        for word in words:
            tmp = []
            for i in range(1, len(word)):
                tmp.append(ord(word[i]) - ord(word[i-1]))
            diff_arr.append(tuple(tmp))
        
        comp_ans_idx, ch = 0, 0
        for i in range(len(diff_arr)):
            if diff_arr[comp_ans_idx] != diff_arr[i]:
                semi_ans_idx = i
                ch += 1
        
        if ch == 1:
            return words[semi_ans_idx]
        return words[comp_ans_idx]
