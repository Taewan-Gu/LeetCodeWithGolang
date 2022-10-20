import (
    "strconv"
)

func isHappy(n int) bool {
    for i:= 0; i < 1000; i++ {
        n = isTrue(n)
        if n == 1 {
            return true
        }
    }
    return false
}

func isTrue(n int) int {
    ans := 0
    s := strconv.Itoa(n)
    for i := 0; i < len(s); i++ {
        ans += (int(s[i])-48)*(int(s[i])-48)
    }
    return ans
}