function maxProfit(prices: number[]): number {
    let min = prices[0]
    let ans = 0
    for (const price of prices) {
        if (min > price) {
            min = price
        }
        ans = Math.max(price - min, ans)
    }

    return ans
};
