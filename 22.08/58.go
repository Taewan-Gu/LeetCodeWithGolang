func lengthOfLastWord(s string) int {
    s = strings.Trim(s, " ")
    a := 0
    for _, v := range strings.Split(s, " ") {
        a = len(v)
    }
    
    return a
}