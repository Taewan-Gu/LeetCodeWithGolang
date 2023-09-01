function isPalindrome(x: number): boolean {
    const str = String(x)
    let [i, j] = [0, str.length-1]
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false
        }
    }

    return true
};
