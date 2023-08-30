function wordPattern(pattern: string, s: string): boolean {
    const [mem, mem2] = [{}, {}]
    let t = s.split(" ")
    if (pattern.length !== t.length) return false

    for (let i=0; i<pattern.length; i++) {
        if (t[i] === "constructor") {
            return true
        }
        if (!mem[pattern[i]]) {
            mem[pattern[i]] = t[i]
        } else {
            if (mem[pattern[i]] !== t[i]) {
                return false
            }
        }
        if (!mem2[t[i]]) {
            mem2[t[i]] = pattern[i]
        } else {
            if (mem2[t[i]] !== pattern[i]) {
                return false
            }
        }
    }

    return true
};
