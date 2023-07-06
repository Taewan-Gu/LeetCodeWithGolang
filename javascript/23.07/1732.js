/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let [altitude, ans] = [0, 0]
    gain.forEach(x => {
        altitude += x
        ans = Math.max(altitude, ans)
    })
    return ans
};
