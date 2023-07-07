/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ans = []
    for (let i = 0; i < numRows; i++) {
        const floor = []
        floor.push(1)
        for (let j = 1; j <= i; j++) {
            if (ans[i-1].length === j) {
                floor.push(ans[i-1][j-1])
            } else {
                floor.push(ans[i-1][j] + ans[i-1][j-1])
            }
        }
        ans.push(floor)
    }

    return ans
};
