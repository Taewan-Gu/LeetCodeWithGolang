function wordBreak(s: string, wordDict: string[]): boolean {
    const dp = new Array(s.length+1)
    dp[0] = true
    for (let i=0; i<s.length; i++) {
        if (dp[i]) {
            let word = ""
            for (let j=i; j<s.length; j++) {
                word += s[j]
                if (wordDict.includes(word)) {
                    dp[j+1] = true
                }
            }
        }
    }

    return dp[s.length] ? true : false
};
