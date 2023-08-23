function maxProfit(prices: number[]): number {
    let [min, ans] = [prices[0], 0]
    for (const price of prices) {
        if (min < price) {
            ans += price - min
        }
        min = price
    }
    return ans
};
