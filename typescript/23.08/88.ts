/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let [i, j, k] = [m-1, n-1, n+m-1]
    while (k > -1) {
        if (i > -1 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        } else if (j > -1) {
            nums1[k--] = nums2[j--]
        } else {
            break
        }
    }
};
