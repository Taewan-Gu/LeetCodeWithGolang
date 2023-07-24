/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    const ch = []
    let ans = 0
    for (let i = 0; i<nums.length; i++) {
        for (let j = 0; j<nums.length; j++) {
            if ((i*j)%k === 0 && !ch.includes(j) && i !== j && nums[i] === nums[j]) {
                console.log(i, j, ch)
                ans += 1
            }
        }
        ch.push(i)
    }

    return ans
};
