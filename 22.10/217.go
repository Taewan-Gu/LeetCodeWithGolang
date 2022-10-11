func containsDuplicate(nums []int) bool {
    a := make(map[int]int)
    for _, v := range(nums) {
        if a[v] == 1 {
            return true
        }
        a[v]++
    }
    return false
}