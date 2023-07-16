/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const t = [0, 1, 1, 2, 4, 7]

    for (let i = t.length; i <= n; i++) {
        t.push(t[i-3] + t[i-1] + t[i-2])
    }

    return t[n]
};
