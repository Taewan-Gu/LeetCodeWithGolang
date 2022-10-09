func isIsomorphic(s string, t string) bool {
    check := make(map[byte]rune)
    check2 := make(map[rune]byte)
    for i, v := range(s) {
        if check[t[i]] == 0 {
            check[t[i]] = v
        } else {
            if check[t[i]] != v {
                return false
            }
        }
        
        if check2[v] == 0 {
            check2[v] = t[i]
        } else {
            if check2[v] != t[i] {
                return false
            }
        }
    }
    
    return true
}