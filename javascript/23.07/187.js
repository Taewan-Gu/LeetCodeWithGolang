/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    ans = []
    mem = {}
    for (let i = 0; i < s.length-9; i++) {
        if (mem[s.slice(i, i+10)] === undefined) {
            mem[s.slice(i, i+10)] = 1
        } else {
            mem[s.slice(i, i+10)] += 1
        }   
    }

    for (key in mem) {
        if (mem[key] > 1) {
            ans.push(key)
        }
    }
    return ans
};
