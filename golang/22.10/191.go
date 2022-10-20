import "fmt"

func hammingWeight(num uint32) int {
    s := change(num)
    
    ans := 0
    for _, v := range(s) {
        if v == '1' {
            ans++
        }
    }
    
    return ans
}

func change(num uint32) string {
    s := ""
    if num >= 1 {
        s = fmt.Sprintf("%d", num%2) + s
        s = change(num/2) + s
    }
    return s
}