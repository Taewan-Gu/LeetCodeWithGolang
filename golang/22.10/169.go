func majorityElement(nums []int) int {
    m := make(map[int]int)
    
    for _, i := range(nums) {
        m[i]++
    }
    
    max := nums[0]
    for key, val := range(m) {
        if m[max] < val {
            max = key
        }
    }
    
    return max
}