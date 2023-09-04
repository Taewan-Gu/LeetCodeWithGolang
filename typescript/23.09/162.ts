function findPeakElement(nums: number[]): number {
    let [s, e] = [0, nums.length - 1]
    while (s < e) {
        let mid = Math.floor((s + e) / 2)
        if (nums[mid] > nums[mid + 1]) {
            e = mid
        } else {
            s = mid + 1
        }
    }
    return s
};
