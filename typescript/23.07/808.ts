const dp = {}

function serve(a, b) {
    if (dp[a] && dp[a][b]) {
        return dp[a][b]
    }
    if (a <= 0 && b <= 0) {
        return 0.5
    }
    if (a <= 0) {
        return 1
    }
    if (b <= 0) {
        return 0
    }

    if (!dp[a]) {
        dp[a] = {}
    }
    dp[a][b] = 0.25 * (serve(a-4, b) + serve(a-3, b-1) + serve(a- 2, b-2) + serve(a-1, b-3))

    return dp[a][b]
}

function soupServings(n: number): number {
    if (n > 4800) {
        return 1
    }

    const goal = Math.ceil(n/25)
    return serve(goal, goal)
};
