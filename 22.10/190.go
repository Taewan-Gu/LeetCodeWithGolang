import "math"

func reverseBits(num uint32) uint32 {
    s := change(num)
    s = reverse(s)
    var i float64
    i = 31
    var ans float64
    
    for _, v := range(s) {
        if string(v) == "1" {
            ans += math.Pow(2, i) 
        }
        i--
    }
    
    return uint32(ans)
    
}

func change(num uint32) string {
    s := ""
    if num >= 1 {
        s = fmt.Sprintf("%d", num%2) + s
        s = change(num/2) + s
    }
    return s
}

func reverse(str string) string{
   s := []rune(str)
   for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
      s[i], s[j] = s[j], s[i]
   }
   return string(s)
}