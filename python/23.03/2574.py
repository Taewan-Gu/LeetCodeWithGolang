class Solution:
    def leftRigthDifference(self, nums: List[int]) -> List[int]:
        l, r = 0, sum(nums) - nums[0]
        ans = [abs(r)]
        for i in range(1, len(nums)):
            l += nums[i-1]
            r -= nums[i]
            ans.append(abs(l - r))
        return ans
