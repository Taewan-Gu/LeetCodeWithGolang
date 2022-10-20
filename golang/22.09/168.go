func convertToTitle(columnNumber int) string {
    ans := ""
    for columnNumber > 26 {
        if columnNumber % 26 == 0 {
            ans = string(90) + ans
            columnNumber = columnNumber / 26 - 1
        } else {
            ans = string(64 + columnNumber % 26) + ans
            columnNumber = columnNumber / 26
        }
    }
    if columnNumber % 26 == 0 {
        ans = string(90) + ans
    } else {
        ans = string(64 + columnNumber % 26) + ans
    }
    
    return ans
}