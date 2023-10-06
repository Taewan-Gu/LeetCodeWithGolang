function integerBreak(n: number): number {
    let ans = 1
    for (let i=2; i<n; i++) {
        let mod = n%i
        const div = Math.floor(n/i)
        let semiAns = div;
        for (let j=0; j<i-1; j++) {
            if (--mod < 0) semiAns = semiAns * div
            else semiAns = semiAns * (div + 1)
        }
        if (ans >= semiAns) break
        ans = semiAns
    }
    return ans
};
