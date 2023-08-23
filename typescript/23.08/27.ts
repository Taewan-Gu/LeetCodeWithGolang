function removeElement(nums: number[], val: number): number {
    const filtered = nums.filter(x => x !== val)
    for (let i=0; i<filtered.length; i++) {
        nums[i] = filtered[i]
    }
    
    return filtered.length
};
