/**
 * @param {number[]} score
 * @return {string[]}
 */

function enumerate(arr) {
    const enumArr = []
    for (let i = 0; i < arr.length; i++) {
        enumArr.push([i, arr[i]])
    }

    return enumArr
}

var findRelativeRanks = function(score) {
    const arr = enumerate(score)
    arr.sort((a, b) => b[1] - a[1])

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            score[arr[i][0]] = "Gold Medal"
        }
        else if (i === 1) {
            score[arr[i][0]] = "Silver Medal"
        }
        else if (i === 2) {
            score[arr[i][0]] = "Bronze Medal"
        } else {
            score[arr[i][0]] = (i+1).toString()
        }
    }
    
    return score
};
