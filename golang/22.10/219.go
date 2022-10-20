func containsNearbyDuplicate(nums []int, k int) bool {
    a := make(map[int]int)
    for i, v := range(nums) {
        if a[v] != 0 && (i + 1 - a[v]) <= k {
            return true
        }
        a[v] = i + 1
    }
    return false
}