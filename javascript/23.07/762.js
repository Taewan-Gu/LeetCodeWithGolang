/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let ans = 0
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
    for (let i=left; i<=right; i++) {
        if (primes.includes(i.toString(2).split("1").length - 1)) {
            ans++
        }
    }

    return ans
};
