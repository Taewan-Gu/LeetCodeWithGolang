function maxRunTime(n: number, batteries: number[]): number {
    if (n > batteries.length) {
        return 0
    }

    if (n === 1) {
        return batteries.reduce((cur, x) => cur + x, 0)
    }

    batteries.sort((a,b) => a-b)
    let stock = 0
    while (batteries.length !== n) {
        stock += batteries.shift()
    }

    for (let i=0; i<batteries.length-1; i++) {
        const adjustedAmount = (batteries[i+1] - batteries[i]) * (i+1)
        if (stock - adjustedAmount <= 0) {
            return batteries[i] + Math.floor(stock / (i+1))
        }
        stock -= adjustedAmount
    }

    return batteries[batteries.length-1] + Math.floor(stock / batteries.length)
};
