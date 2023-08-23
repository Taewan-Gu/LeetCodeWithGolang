function canJump(nums: number[]): boolean {
    let canJump = nums[0]
    for (let i=1; i<nums.length; i++) {
        if (canJump <= 0) {
            return false
        }
        canJump = Math.max(nums[i], canJump-1)
    }

    return true
};
