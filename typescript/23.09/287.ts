function findDuplicate(nums: number[]): number {
    const mem = {}
    for (const x of nums) {
        if (mem[x]) return x
        mem[x] = 1
    }
};
