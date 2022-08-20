import (
    "fmt"
    "strconv"
)

func isPalindrome(x int) bool {
    tmp := strconv.Itoa(x)
    for i, v := range tmp {
        if byte(v) != tmp[len(tmp) - i - 1] {
            return false
        }
    }

    return true
}