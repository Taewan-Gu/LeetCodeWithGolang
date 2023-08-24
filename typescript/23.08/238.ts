function productExceptSelf(nums: number[]): number[] {
    const index0 = []
    let multi = 1
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === 0) {
            index0.push(i)
        } else {
            multi *= nums[i]
        }
    }

    const ans = Array.from(Array(nums.length), x => 0)
    if (index0.length === 1) {
        ans[index0[0]] = multi
    } else if (index0.length < 1) {
        for (let i=0; i<nums.length; i++) {
            ans[i] = multi/nums[i]
        }
    }

    return ans
};
