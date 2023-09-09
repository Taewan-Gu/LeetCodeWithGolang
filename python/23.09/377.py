class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        dp = [0] * 1001
        for i in nums:
            dp[i] = 1

        for t in range(1, target+1):
            for n in nums:
                if t+n <= target:
                    dp[t+n] += dp[t]
        
        return dp[target]
