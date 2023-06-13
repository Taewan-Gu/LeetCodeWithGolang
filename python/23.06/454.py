class Solution:
    def fourSumCount(self, nums1: List[int], nums2: List[int], nums3: List[int], nums4: List[int]) -> int:
        ans = 0
        dic = collections.defaultdict(int)
        for i in chain(*[[i + j for j in nums1] for i in nums2]):
            dic[i] += 1
        for i in chain(*[[i + j for j in nums3] for i in nums4]):
            if dic[-i]:
                ans += dic[-i]

        return ans
