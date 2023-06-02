class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        ans = []
        for i in range(len(nums)+1):
            ans.extend(itertools.combinations(nums, i))
        
        return list(set(map(tuple,(map(sorted, map(list, ans))))))
