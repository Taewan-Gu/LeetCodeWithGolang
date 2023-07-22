/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    letters.push(target)
    let ans = letters[0]
    let ch = false
    letters.sort()
    for (x of letters) {
        if (x === target) {
            ch = true
            continue
        } else if (ch) {
            ans = x
            break
        }
    }

    return ans
};
