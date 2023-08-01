function combine(n: number, k: number): number[][] {
    const ans: number[][] = []
    const combinate = (start, arr) => {
        if (arr.length === k) {
            ans.push(arr.map(x => x))
            return
        }
        for (let i=start; i <= n; i++) {
            arr.push(i)
            combinate(i+1, arr)
            arr.pop()
        }
    }
    combinate(1, [])

    return ans
};
