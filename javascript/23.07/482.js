/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    arr = s.replaceAll("-", "").split("").reverse().map(x => x.toUpperCase())
    ans = ""
    for (let i = 0; i < arr.length; i++) {
        if (i%k === 0 && i !== 0) {
            ans = "-" + ans
        }
        ans = arr[i] + ans 
    }
    return ans
};
