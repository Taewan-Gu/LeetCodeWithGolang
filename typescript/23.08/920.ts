function numMusicPlaylists(n: number, goal: number, k: number): number {
    const mod = 10**9+7
    const mem = Array.from(Array(goal+1), () => Array(n+1).fill(0))
    mem[0][0] = 1
    for (let i = 1; i <= goal; i++) {
        for (let j = 1; j <= n; j++) {
            mem[i][j] = mem[i - 1][j - 1] * (n - j + 1);
            mem[i][j] += mem[i - 1][j] * Math.max(j - k, 0);
            mem[i][j] %= mod;
        }
    }

    return mem[goal][n]
};
