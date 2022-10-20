import "sort"

func missingNumber(nums []int) int {
    sort.Slice(nums, func(i, j int) bool {
        return nums[i] < nums[j]
    })
    
    for i, v := range(nums) {
        if i != v {
            return i
        }
    }
    
    return len(nums)
}