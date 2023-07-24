/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let tmp = ""
    const ans = []
    for (x of s) {
        tmp += x
        if (tmp.length === k) {
            ans.push(tmp)
            tmp = ""
        }
    }

    while (k > tmp.length && tmp.length> 0) {
        tmp += fill
    }

    if (tmp) {
        ans.push(tmp)
    }

    return ans
};
