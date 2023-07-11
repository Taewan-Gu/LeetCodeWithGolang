/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let ans = Math.max(...nums)
    const subNumsArr = []
    let subNums = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            subNumsArr.push(subNums.slice(0, subNums.length))
            subNumsArr.push(subNums.slice(0, subNums.length).reverse())
            subNums = []
        } else {
            subNums.push(nums[i])
        }
    }
    subNumsArr.push(subNums.slice(0, subNums.length))
    subNumsArr.push(subNums.reverse())
    for (subNums of subNumsArr) {
        let left = 1
        let right = 1
        let tmp = 0
        for (x of subNums) {
            if (x > 0 && tmp === 0) {
                left *= x
                ans = Math.max(left, ans)
            } else if (x > 0) {
                right *= x
                ans = Math.max(right, ans)
            } else {
                if (tmp === 0) {
                    tmp = x
                } else {
                    left *= tmp * x * right
                    ans = Math.max(left, ans)
                    right = 1
                    tmp = 0
                }
            }
        }
    }

    return ans
};
