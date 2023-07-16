/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    ans = []
    for (x of arr2) {
        for (y of arr1) {
            if (x === y) {
                ans.push(x)
            }
        }
    }

    left = []
    for (x of arr1) {
        if (!arr2.includes(x)) {
            left.push(x)
        }
    }
    left.sort((a,b) => a - b)
    ans.push(...left)

    return ans
};
