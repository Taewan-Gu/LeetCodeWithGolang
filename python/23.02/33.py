class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if len(nums) == 1:
            return 0 if target == nums[0] else -1

        s, e = 0, len(nums)
        i, j = 0, len(nums)
        x = 0
        while x < 10:
            mid = (i+j) // 2
            if nums[0] <= nums[mid-1] and nums[0] >= nums[mid]:
                if target < nums[0] or mid == 0:
                    s, e = mid, len(nums)
                else:
                    s, e = 0, mid
                break
            if nums[0] < nums[mid]:
                i = mid
            else:
                j = mid + 1
            x += 1

        if target == nums[s]:
            return s

        while s < e:
            mid = (s+e) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                s = mid + 1
            else:
                e = mid
        
        return -1
