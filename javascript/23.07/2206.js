/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    nums.sort()
    let b = null
    for (x of nums) {
        if (b && x !== b) {
            return false
        } else if (b === null) {
            b = x
        } else {
            b = null
        }
    }

    return true
};
