/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const evens = []
    const odds = []
    const ans = []
    nums.forEach(x => x % 2 === 0 ? evens.push(x) : odds.push(x))
    while (evens.length !== 0) {
        ans.push(evens.pop())
        ans.push(odds.pop())
    }

    return ans
};
