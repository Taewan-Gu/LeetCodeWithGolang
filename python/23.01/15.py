import bisect

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        ans = dict()
        dic = collections.defaultdict(list)
        ch = collections.defaultdict(int)
        b = []
        for i in nums:
            ch[i] += 1
            if ch[i] > 3:
                b.append(i)
        for i in b:
            nums.remove(i)
        nums.sort()
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                a = bisect.bisect_left(nums, -nums[i]-nums[j])
                if a < len(nums) and nums[a] + nums[i] + nums[j] == 0 and a != i and a != j:
                    ans[tuple(sorted([nums[a], nums[i], nums[j]]))] = True
            
        return ans.keys()
