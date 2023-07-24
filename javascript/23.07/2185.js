/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let cnt = 0
    for (word of words) {
        if (word.slice(0, pref.length) === pref) {
            cnt += 1
        }
    }

    return cnt
};
