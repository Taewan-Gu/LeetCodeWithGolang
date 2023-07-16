/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    qrt = arr.length/4
    cnt = 0
    before = -1
    for (x of arr) {
        if (x === before) {
            cnt += 1
        } else {
            cnt = 1
            before = x
        }
        if (cnt > qrt) {
            return x
        }
    }
};
