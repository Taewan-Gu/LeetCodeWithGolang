function permute(nums: number[]): number[][] {
    const ans: number[][] = []

    const per = (arr) => {
        if (arr.length === nums.length) {
            ans.push(arr.map(x => x))
            return
        }
        for (const x of nums) {
            if (arr.includes(x)) continue
            arr.push(x)
            per(arr)
            arr.pop()
        }
    }
    per([])

    return ans
};
