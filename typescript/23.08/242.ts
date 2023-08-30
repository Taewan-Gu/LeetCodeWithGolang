function isAnagram(s: string, t: string): boolean {
    const mem ={}
    if (s.length !== t.length) return false
    for (const x of s) {
        if (!mem[x]) {
            mem[x] = 0
        }
        mem[x]++
    }
    for (const x of t) {
        if (!mem[x]) {
            return false
        }
        mem[x]--
    }

    return true
};
