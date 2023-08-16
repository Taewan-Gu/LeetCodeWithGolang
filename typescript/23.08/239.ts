function maxSlidingWindow(nums: number[], k: number): number[] {
    const before = nums.splice(0,k)
    nums.reverse()
    let max_before = Math.max(...before)
    const ans = [max_before]
    while (nums.length !== 0) {
        const x = nums.pop()
        const removed_num = before.shift()
        if (max_before === removed_num) {
            max_before = Math.max(...before)
        }

        max_before = Math.max(max_before, x)
        before.push(x)
        ans.push(max_before)
    }

    return ans
};
