class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        dic = dict()
        for i in nums1:
            dic[i] = True
        ans = []
        for i in set(nums2):
            if dic.get(i):
                ans.append(i)
        return ans