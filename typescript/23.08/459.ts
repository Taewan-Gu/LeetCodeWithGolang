function repeatedSubstringPattern(s: string): boolean {
    for (let i=1; i<Math.floor(s.length/2+1); i++) {
        if (s.length%i !== 0) {
            continue
        }
        let ch = true
        for (let j=0; j<s.length; j++) {
            if (s[j%i] !== s[j]) {
                ch = false
                break
            }
        }
        if (ch) {
            return true
        }
    }

    return false
};
