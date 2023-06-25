function plusOne(digits: number[]): number[] {
    let ch = false
    for (let i = digits.length-1; i > -1; i--) {
        if (digits[i] != 9) {
            digits[i]++
            break
        } else {
            digits[i] = 0
            if (i == 0) {
                ch = true
            }
        }
    }

    if (ch) {
        digits = [1].concat(digits)
    }

    return digits
};
