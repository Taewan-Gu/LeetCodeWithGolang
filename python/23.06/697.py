class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        dic = collections.defaultdict(int)
        for i in nums:
            dic[i] += 1
        
        comp = 0
        max_v = []
        for x, y in dic.items():
            if comp < y:
                max_v = [x]
                comp = y
            elif comp == y:
                max_v.append(x)

        ans = float('inf')
        for v in max_v:
            tmp = []
            for i in range(len(nums)):
                if nums[i] == v:
                    tmp.append(i)
            ans = min(ans, tmp[-1] - tmp[0] + 1)
        
        return ans
