class Solution:
    def __init__(self):
        self.ans = set()
        self.visit = collections.defaultdict(bool)

    def dfs(self, s, e, li, cur, tar):
        if self.visit.get(tuple(cur)):
            return
        self.visit[tuple(cur)] = True
        for i in range(s, e):
            tmp = cur + [li[i]]
            stmp = sum(tmp)
            if stmp < tar:
                self.dfs(i+1, e, li, tmp, tar)
            elif stmp == tar:
                self.ans.add(tuple(tmp))

    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        for i in range(len(candidates)):
            self.dfs(i, len(candidates), candidates, [], target)

        return self.ans
