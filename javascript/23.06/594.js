/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    tmp = {}
    for(x of nums) {
        if (tmp[x]) {
            tmp[x]++
        } else {
            tmp[x] = 1
        }
    }

    ans = 0
    for(key in tmp) {
        if (tmp[String(1+Number(key))] !== undefined) {
            ans = Math.max(ans, tmp[String(1+Number(key))] + tmp[key])
        }
        if (tmp[String(Number(key)-1)] !== undefined) {
            ans = Math.max(ans, tmp[String(Number(key)-1)] + tmp[key])
        }
    }

    return ans
};
