class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        cnt, ans = 0, -float('inf')
        for i in nums:
            cnt += i
            ans = cnt if cnt > ans else ans
            cnt = 0 if cnt < 0 else cnt
        return ans
