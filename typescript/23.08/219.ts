function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const mem = {}
    for (let i=0; i<nums.length; i++) {
        if (mem[nums[i]] !== undefined && i - mem[nums[i]] <= k) {
            return true
        }
        mem[nums[i]] = i
    }
    return false
};
