class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        return sum([0 if i % 2 else nums[i] for i in range(len(nums))])