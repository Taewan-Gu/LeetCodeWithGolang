/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(ss) {
    const [s, e] = ss.split(":")
    const ans = []
    for (let i=s.charCodeAt(0); i<=e.charCodeAt(0); i++) {
        for (let j=Number(s[1]); j<=Number(e[1]); j++) {
            ans.push(String.fromCharCode(i) + j)
        }
    }

    return ans
};
