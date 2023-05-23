class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        idx = 0
        dic = collections.defaultdict(int)
        for i in range(len(nums)):
            dic[nums[i]] += 1
            if dic[nums[i]] > 2:
                continue
            else:
                nums[idx] = nums[i]
                idx += 1

        return idx
