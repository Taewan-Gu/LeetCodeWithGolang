function search(nums: number[], target: number): number {
    if (nums.length === 1) return target === nums[0] ? 0 : -1

    let [s, e] = [0, nums.length]
    let [i, j] = [0, nums.length]
    let x = 0
    
    while (x < 10) {
        let mid = Math.floor((i+j)/2)
        if (nums[0] <= nums[mid-1] && nums[0] >= nums[mid]) {
            if (target < nums[0] || mid === 0) {
                s = mid
                e = nums.length
            } else {
                s = 0
                e = mid
            }
            break
        }
            
        if (nums[0] < nums[mid]) {
            i = mid
        } else {
            j = mid + 1
        }
        x++
    }

    if (target === nums[s]) return s

    while (s < e) {
        let mid = Math.floor((s+e)/2)
        if (nums[mid] == target) return mid
        if (nums[mid] < target) {
            s = mid + 1
        } else {
            e = mid
        }
    }
    
    return -1
};
