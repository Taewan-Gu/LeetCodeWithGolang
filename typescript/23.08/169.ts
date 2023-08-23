function majorityElement(nums: number[]): number {
    const visit = {}
    for (const x of nums) {
        if (!visit[x]) {
            visit[x] = 0
        }
        visit[x]++
        if (visit[x] > nums.length/2) {
            return x
        }
    }
};
