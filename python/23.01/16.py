class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        ans = set()
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
                a = bisect.bisect_left(nums, target - nums[i] - nums[j])
                a = a if a < len(nums) else a - 1
                d = nums[i] + nums[j] - target
                if abs(nums[a] + d) > abs(nums[a-1] + d) and a-1 > -1:
                    a -= 1
                if a != i and a != j:
                    c = nums[a] + nums[i] + nums[j] - target
                    ans.add((abs(c), c))
        
        ans = sorted(list(ans), key=lambda x:x[0])
        return ans[0][1] + target
