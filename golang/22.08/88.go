func merge(nums1 []int, m int, nums2 []int, n int)  {    
    if len(nums2) == 0 {
        return 
    }
    
    if len(nums1) == 0 {
        for i, v := range nums2 {
            nums1[i] = v
        }
        return
    }
    
    tmp := make([]int, len(nums1))
    copy(tmp, nums1)
    i := 0
    j := 0
    
    for true {
        if i == m {
            for ;j < n; j++ {
                nums1[i+j] = nums2[j]
            }
            break
        }
        
        if j == n {
            for ;i < m; i++ {
                nums1[i+j] = tmp[i]
            }
            break
        }
        
        if tmp[i] >= nums2[j] {
            nums1[i+j] = nums2[j]
            j++
        } else {
            nums1[i+j] = tmp[i]
            i++
        }
    }
}