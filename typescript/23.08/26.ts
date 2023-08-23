function removeDuplicates(nums: number[]): number {
    let j = 0
    let before = null
    for (const num of nums) {
        if (num !== before) {
            nums[j++] = num
        }
        before = num
    }
    
    return j
};
