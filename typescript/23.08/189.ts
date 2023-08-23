function rotate(nums: number[], k: number): void {
    const len = nums.length
    const mod = k%len
    const filteredNums = nums.filter((_,i) => i<len-mod)
    let idx = 0
    for (let i=len-mod; i<2*len-mod; i++) {
        if (i < len) {
            nums[idx++] = nums[i]
        } else {
            nums[idx++] = filteredNums[i%len]
        }
    }
};
