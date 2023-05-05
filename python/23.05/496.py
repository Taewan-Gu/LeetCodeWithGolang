class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums2.append(-1)
        ans = []
        for i in nums1:
            ch = -2
            for j in nums2:
                if ch != -2 and (j > ch or j == -1):
                    ans.append(j)
                    break
                if j == i:
                    ch = j
        return ans
