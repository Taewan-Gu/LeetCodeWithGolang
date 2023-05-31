class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        s = []
        ans = []
        cnt = 0
        for word in words:
            if cnt + len(word) > maxWidth:
                ans.append(s[:])
                s = []
                cnt = 0
            cnt += len(word) + 1
            s.append(word)
        ans.append(" ".join(s))
        ans[-1] += " " * (maxWidth - len(ans[-1]))

        for k in range(len(ans)):
            l = ans[k]
            if type(l) is list:
                sl = len(l) - 1
                wid = maxWidth - sum([len(i) for i in l])
                sentence = l[0]
                if len(l) == 1:
                    sentence += " " * (maxWidth - len(sentence))
                for i in range(1, len(l)):
                    if wid % sl:
                        wid -= 1
                        bonus = 1
                    else:
                        bonus = 0
                    space_count = wid // sl + bonus
                    sentence += " " * space_count
                    sentence += l[i]
                ans[k] = sentence

        return ans
