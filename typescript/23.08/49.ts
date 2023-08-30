function groupAnagrams(strs: string[]): string[][] {
    const copied = strs.filter(x=>x !== undefined)
    const sorted = copied.map(x => x.split("").sort().join(""))
    const mem = {}
    const ans = []
    const blank = []
    for (let i=0; i<sorted.length; i++) {
        if (strs[i] === "") {
            blank.push("")
            continue
        }
        if (!mem[sorted[i]]) {
            mem[sorted[i]] = [i]
        } else {
            mem[sorted[i]].push(i)
        }
    }

    if (blank.length > 0) {
        ans.push(blank)
    }

    for (const k of Object.keys(mem)) {
        ans.push(mem[k].map(i => strs[i]))
    }

    return ans
};
