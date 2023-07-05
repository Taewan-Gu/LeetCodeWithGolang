/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    dp = new Array(2001).fill(0)
    pairs.sort((a, b) => a[0] - b[0])
    for (let [x, y] of pairs) {
        let maxPreviousValues = 0
        for (let i = 0; i < x+1001; i++) {
            maxPreviousValues = Math.max(dp[i], maxPreviousValues)
        }
        dp[y+1001] = maxPreviousValues + 1
    }
    
    return Math.max(...dp)
};
