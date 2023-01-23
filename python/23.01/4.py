class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = nums1 + nums2
        nums.sort()
        n = (len(nums1) + len(nums2) - 1) / 2
        if n % 1:
            return (nums[math.ceil(n)] + nums[math.floor(n)]) / 2
        return nums[int(n)]
