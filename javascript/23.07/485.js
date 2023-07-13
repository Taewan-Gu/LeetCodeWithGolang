/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ans = 0
    let cnt = 0
    for (const x of nums) {
        if (x === 1) {
            cnt += 1
        } else {
            ans = Math.max(cnt, ans)
            cnt = 0
        }
    }
    ans = Math.max(cnt, ans)
    return ans
};
