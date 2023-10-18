class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        ans, res, before = 0, 1, float('inf')
        for i in sorted(list(set(nums))):
            if before+1 == i:
                res += 1
            else:
                res = 1
            before = i
            ans = max(ans, res)
        return ans
