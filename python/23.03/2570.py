class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        dic = defaultdict(int)
        for i, j in nums1:
            dic[i] += j
        for i, j in nums2:
            dic[i] += j
        
        return sorted([[k, v] for k, v in dic.items()])
