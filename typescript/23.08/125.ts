function isPalindrome(s: string): boolean {
    let forward = ""
    let backward = ""
    for (let x of s) {
        x = x.toLowerCase()
        if (96 < x.charCodeAt(0) && x.charCodeAt(0) < 123) {
            forward += x
            backward = x + backward
        } else if (47 < x.charCodeAt(0) && x.charCodeAt(0) < 58) {
            forward += x
            backward = x + backward
        }
    }

    return forward === backward
};
