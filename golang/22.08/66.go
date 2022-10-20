func plusOne(digits []int) []int {
    var ans []int
    ch := false
    
    for i := len(digits) - 1; i >= 0; i-- {
        digits[i] = (1 + digits[i]) % 10
        if digits[i] != 0 {
            ch = true
            break
        }
    }
    
    a := []int{1}
    
    if ch == false {
        ans = append(a, digits...)
    } else {
        ans = digits
    }
    
    
    return ans
}