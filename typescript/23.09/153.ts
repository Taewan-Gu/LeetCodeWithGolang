function findMin(nums: number[]): number {
    let [s, e] = [0, nums.length - 1]
    while (s < e) {
        let mid = Math.floor((s + e) / 2)
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid+1]
        }
        if (nums[s] > nums[mid]) {
            e = mid
        } else {
            s = mid + 1
        }
    }
    if (s+1 === nums.length) {
        return nums[0]
    }
    return nums[s+1]
};
