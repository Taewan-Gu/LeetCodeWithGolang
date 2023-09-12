function minDeletions(s: string): number {
    s = s.split("").sort().join("")
    const mem = []
    let beforeCnt = 0
    let beforeChr = ""
    for (const x of s) {
        if (x === beforeChr) {
            beforeCnt++
        } else {
            mem.push(beforeCnt)
            beforeCnt = 1
        }
        beforeChr = x
    }
    mem.push(beforeCnt)
    mem.shift()
    mem.sort((a,b) => b-a)
    let ans = 0
    for (let i=1; i<mem.length; i++) {
        while (mem[i-1] <= mem[i]) {
            if (mem[i] === 0) {
                break
            }
            mem[i]--
            ans++
        }
    }

    return ans
};
