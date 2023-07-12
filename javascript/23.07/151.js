/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    ans = ""
    for (x of s.split(" ").reverse()) {
        if (x) {
            ans += " " + x
        }
    }

    return ans.slice(1,)
};
