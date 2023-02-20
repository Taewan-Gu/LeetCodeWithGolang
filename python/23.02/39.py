class Solution:
    def __init__(self):
        self.ans = []

    def dfs(self, x, s, ca, t):
        for i in range(s, len(ca)):
            ss = sum(x)
            if t == ss:
                self.ans.append(x)
                return
            if t < ss:
                return 
            self.dfs(x + [ca[i]], i, ca, t)

    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        self.dfs([], 0, candidates, target)

        return self.ans
