/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.unshift(0)
    flowerbed.push(0)
    let ans = 0
    let cnt = 0
    for (const f of flowerbed) {
        if (f === 0) {
            cnt += 1
        } else {
            if (cnt > 0) {
                ans += Math.floor((cnt - 1)/2)
            }
            cnt = 0
        }
    }
    if (cnt > 0) {
        ans += Math.floor((cnt - 1)/2)
    }

    return ans >= n
};
