function canConstruct(ransomNote: string, magazine: string): boolean {
    const mem = {}
    for (const x of magazine) {
        if (mem[x]++) {
            mem[x]++
        } else {
            mem[x] = 1
        }
    }
    for (const x of ransomNote) {
        if (mem[x]) {
            mem[x]--
        } else {
            return false
        }
    }

    return true
};
