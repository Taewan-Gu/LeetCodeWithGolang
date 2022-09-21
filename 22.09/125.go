import (
    "strings"
)

func isPalindrome(s string) bool {
    
    start := 0
    end := len(s) - 1
    a := strings.ToUpper(s)
    for start < end {
        if !((64 < int(a[start]) && int(a[start]) < 91) || (47 < int(a[start]) && int(a[start]) < 58))  {
            start++
        } else if !((64 < int(a[end]) && int(a[end]) < 91) || (47 < int(a[end]) && int(a[end]) < 58)) {
            end--
        } else {
            if a[start] != a[end] {
                return false
            }
            start++
            end--
        }
    } 
    
    return true
}