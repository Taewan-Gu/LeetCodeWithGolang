/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let cnt = -1
    const dic = nums.reduce((a, v) => {
        cnt++
        return { ...a, [v]: cnt}
        }, {})
    console.log(dic)
    nums.sort((a,b) => b-a)
    if (nums[0] >= nums[1] * 2) {
        return dic[nums[0]]
    }
    return -1
};
