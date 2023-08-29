function isIsomorphic(s: string, t: string): boolean {
    const mem = {}
    const mem2 = {}
    if (s.length !== t.length) return false
    for (let i=0; i<s.length; i++) {
        if (!mem[s[i]]) {
            mem[s[i]] = t[i]
        } else {
            if (mem[s[i]] !== t[i]) {
                return false
            }
        }
        if (!mem2[t[i]]) {
            mem2[t[i]] = s[i]
        } else {
            if (mem2[t[i]] !== s[i]) {
                return false
            }
        }
    }

    return true
};
