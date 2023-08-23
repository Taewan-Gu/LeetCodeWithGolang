function removeDuplicates(nums: number[]): number {
    let j = 0
    let visit = {}
    for (const num of nums) {
        if (!visit[num]) {
            visit[num] = 0
        }
        if (visit[num] < 2) {
            visit[num]++
            nums[j++] = num
        }
    }
    
    return j
};
