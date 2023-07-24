/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let cnt = 0
    for (let i=1; i<=num; i++) {
        if (String(i).split("").reduce((cur, x) => cur + Number(x), 0)%2 === 0) {
            cnt += 1
        }
    }

    return cnt
};
