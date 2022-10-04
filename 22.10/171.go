func titleToNumber(columnTitle string) int {
    s := 0
    for _, v := range(columnTitle) {
        s *= 26
        s += int(v) - 64
    }
    
    return s
}