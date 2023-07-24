/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    nums.sort((a,b) => a-b)
    const min = nums[0]
    const max = nums[nums.length-1]
    while (nums[0] === min) {
        nums.shift()
    }
    while (nums[nums.length-1] === max) {
        nums.pop()
    }

    return nums.length
};
