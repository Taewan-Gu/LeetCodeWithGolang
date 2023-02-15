class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        for i in range(len(nums)-1, 0, -1):
            if nums[i] <= nums[i-1]:
                continue
            else:
                m = 101
                t = nums[i-1:]
                for j in t:
                    if j > nums[i-1]:
                        m = min(m, j)
                    nums.pop()
                t.remove(m)
                t.sort()
                nums.append(m)
                nums.extend(t)
                return 

        nums.sort()
