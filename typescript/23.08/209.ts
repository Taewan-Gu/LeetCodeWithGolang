function minSubArrayLen(target: number, nums: number[]): number {
    let [ans, i, j, sum, ch] = [Infinity, 0, 0, 0, true]
    while (i !== nums.length) {
        if (ch) {
            sum += nums[i]
        } else {
            sum -= nums[j++]
        }

        if (sum >= target) {
            ans = Math.min(ans, i - j + 1)
            ch = false
        } else {
            i++
            ch = true
        }
    }

    return ans === Infinity ? 0 : ans
};
