function numIdenticalPairs(nums: number[]): number {
    const check = {}
    let ans = 0
    for (const n of nums) {
        if (!check[n]) check[n] = 0
        ans += check[n]++
    }

    return ans
};
