import "strconv"
import "fmt"

func addBinary(a string, b string) string {
    ans := ""
    if len(a) > len(b) {
        tmp := ""
        for i := 0; i < (len(a) - len(b)); i++ {
            tmp += "0"
        }
        b = tmp + b
    } else {
        tmp := ""
        for i := 0; i < (len(b) - len(a)); i++ {
            tmp += "0"
        }
        a = tmp + a
    }
    
    bonus := 0
    for i := len(a) - 1; i >= 0; i-- {
        t, _ := strconv.Atoi(string(a[i]))
        tt, _ := strconv.Atoi(string(b[i]))
        ch := t + tt + bonus
        if ch > 1 {
            bonus = 1
        } else {
            bonus = 0
        }
        ans = strconv.Itoa(ch % 2) + ans
        fmt.Println(ans)
    }
    
    if bonus == 1 {
        return "1" + ans
    }
    
    return ans
}