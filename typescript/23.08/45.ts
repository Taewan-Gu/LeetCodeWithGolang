function jump(nums: number[]): number {
    let [end, arr, ans] = [0, 0, 0]
    
    for (let i=0; i<nums.length-1; i++){
        arr = Math.max(arr, nums[i]+i)
        
        if (i === end){
            end = arr
            ans++
        }
    }
    return ans
};
