function minExtraChar(s: string, dictionary: string[]): number {
    const dp = Array.from(Array(s.length), (_, i) => i+1)
    if (dictionary.includes(s[0])) {
        dp[0] = 0
    }
    for (let i=1; i<s.length; i++) {
        for (const x of dictionary) {
            if (x.length <= i+1 && s.slice(i+1-x.length,i+1) === x) {
                if (dp[i - x.length]) {
                    dp[i] = Math.min(dp[i], dp[i - x.length])
                } else {
                    dp[i] = 0
                }
            } else {
                dp[i] = Math.min(dp[i], dp[i-1]+1)
            }
        }
    }
    return dp[dp.length-1]
};
