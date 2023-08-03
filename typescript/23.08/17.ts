function letterCombinations(digits: string): string[] {
    if (digits === "") {
        return []
    }

    const phone = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }
    let ans: string[] = [""]
    for (const x of digits) {
        const tmpAns = []
        while (ans.length != 0) {
            const comb = ans.pop()
            for (const y of phone[x]) {
                tmpAns.push(comb + y)
            }
        }
        ans = tmpAns
    }

    return ans
};
