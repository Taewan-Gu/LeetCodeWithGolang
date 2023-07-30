function strangePrinter(s: string): number {
    const mem = [...Array(s.length)].map(_r => Array(s.length));
    const find = (start, end) => {
        if (start > end) {
            return 0
        }
        if (start === end) {
            return 1
        }
        if (mem[start] && mem[start][end]) {
            return mem[start][end]
        }

        let ans = find(start, end - 1) + 1
        for (let i = start; i < end; i++) {
            if (s[i] === s[end]) {
                ans = Math.min(ans, find(start, i) + find(i + 1, end - 1));
                mem[start][end] = ans
            }
        }
        return ans
    }
    return find(0, s.length-1)
};

