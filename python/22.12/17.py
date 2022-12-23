class Solution:
    def __init__(self):
        self.ans = []
        self.dic = {
            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"]
        }

    def getAll(self, s, cnt, cur):
        if len(s) == cnt:
            if cnt > 0:
                self.ans.append(cur)
            return

        for i in self.dic[s[cnt]]:
            self.getAll(s, cnt + 1, cur + i)

    def letterCombinations(self, digits: str) -> List[str]:
        self.getAll(digits, 0, "")
        return self.ans
