function convertToTitle(columnNumber: number): string {
    let ans = ""
    while (columnNumber > 26) {
        ans = String.fromCharCode(65 + (columnNumber-1)%26) + ans
        columnNumber = Math.floor((columnNumber-1)/26)
    }
    ans = String.fromCharCode(65 + (columnNumber-1)%26) + ans
    return ans
};
