class Solution:
    def jump(self, nums: List[int]) -> int:
        ans = [0] + [float('inf')] * len(nums)
        for i in range(len(nums)):
            for j in range(nums[i]):
                if len(ans) > (i + j + 1):
                    ans[i + j + 1] = min(ans[i] + 1, ans[i+j+1])

        return ans[len(nums)-1]
