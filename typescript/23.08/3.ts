function lengthOfLongestSubstring(s: string): number {
    const visit = {}
    let [i, j, ans] = [0, 0, 0]
    while (i < s.length) {
        if (visit[s[i]] === undefined) {
            visit[s[i]] = 0
        }
        if (visit[s[i]] > 0) {
            visit[s[j++]]--
            ans = Math.max(ans, i - j + 1)
        } else {
            visit[s[i++]]++
        }
    }

    return Math.max(ans, i - j)
};
