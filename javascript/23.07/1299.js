/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let maxNum = 0
    const maxNums = []
    for (let i = arr.length - 1; i > 0; i--) {
        maxNum = Math.max(arr[i], maxNum)
        maxNums.unshift(maxNum)
    }
    maxNums.push(-1)

    return maxNums
};
