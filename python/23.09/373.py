class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        i, j = 0, 0
        while k > (i+1) * (j+1):
            if i+1 >= len(nums1):
                j += 1
            elif j+1 >= len(nums2):
                i += 1
            elif nums1[i+1] < nums2[j+1]:
                i += 1
            else:
                j += 1
        nums1 = nums1[:i+100]
        nums2 = nums2[:j+100]

        ans = []
        for i in nums1:
            for j in nums2:
                ans.append([i,j])        
        ans.sort(key=lambda x: sum(x))

        return ans[:k]

