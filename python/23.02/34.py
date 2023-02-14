import bisect

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        a = bisect.bisect_left(nums, target)
        if 0<= a < len(nums) and nums[a] == target:
            return [a, bisect.bisect_right(nums, target)-1]
        else:
            return [-1,-1]
