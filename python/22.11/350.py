from collections import defaultdict

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        dic = defaultdict(int)
        for i in nums1:
            dic[i] += 1
        
        ans = []
        for i in nums2:
            if dic[i]:
                dic[i] -= 1
                ans.append(i)
        
        return ans