function convert(s: string, numRows: number): string {
    const arr = Array.from(Array(numRows), x => [])
    let [cnt, ch] = [0, true]
    if (numRows === 1) {
        return s
    }

    for (const x of s) {
        arr[cnt].push(x)
        ch ? cnt++ : cnt--
        if (cnt === 0) ch = true
        if (cnt === numRows-1) ch = false
    }

    return arr.reduce((cur, x) => cur + x.reduce((cur, x) => cur + x, ""), "")
};
