function validPartition(nums: number[]): boolean {
    const dp = [true, false, nums[0] === nums[1]]
    for (let i = 2; i < nums.length; i++) {
        const cur = nums[i] === nums[i - 1] && dp[1] ||
            nums[i] === nums[i - 1] && nums[i] === nums[i - 2] && dp[0] ||
            nums[i] - nums[i - 1] === 1 && nums[i] - nums[i - 2] === 2 && dp[0]
        dp[0] = dp[1]
        dp[1] = dp[2]
        dp[2] = cur
    }
    return dp[2]
};
