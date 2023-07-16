/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b) => b-a)
    len = arr.length
    for (let i = 0; i < len/20; i++){
        arr.shift()
        arr.pop()
    }
    return arr.reduce((cur, x) => cur + x, 0)/arr.length
};
