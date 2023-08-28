function searchInsert(nums: number[], target: number): number {
    let [low, mid, top] = [0, 0, nums.length]

    while (low < top) {
        mid = Math.floor((low + top)/2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) {
            low = mid + 1
        } else {
            top = mid
        }
    }
    return low
};
