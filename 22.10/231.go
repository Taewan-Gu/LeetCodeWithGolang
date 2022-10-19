import "strconv"
import "fmt"

func summaryRanges(nums []int) []string {
    if len(nums) == 0 {
        return make([]string, 0, 0)
    }
    
    ans := make([]string, 1, 20)
    ans[0] = strconv.Itoa(nums[0])
    if len(nums) == 1 {
        return ans
    }
    
    start := nums[0]
    before := nums[0]
    for _, v := range(nums[1:]) {
        if v == before + 1 {
            ans[len(ans) - 1] = strconv.Itoa(start) + "->" + strconv.Itoa(v)
        } else {
            ans = append(ans, strconv.Itoa(v))
            start = v
        }
        
        before = v
    }
    
    return ans
}