function isHappy(n: number): boolean {
    const mem = {}

    while (!mem[n]) {
        if (n === 1) {
            return true
        }
        mem[n] = true
        n = String(n).split("").reduce((cur, x) => Number(x)**2 + cur, 0)
    }

    return false
};
