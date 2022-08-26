func searchInsert(nums []int, target int) int {
    s := 0
    e := len(nums)
    
    for s < e {
        mid := (s+e)/2
        if nums[mid] > target {
            e = mid
        } else if nums[mid] == target {
            return mid
        }else {
            s = mid + 1
        }
    }
    
    return s
    
}