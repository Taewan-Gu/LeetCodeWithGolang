/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let total = 0
    for (let i = 1; i < Math.ceil(num**0.5); i ++) {
        if (num / i === Math.ceil(num / i)) {
            total += num / i + i
        }
    }

    return total === num * 2
};
