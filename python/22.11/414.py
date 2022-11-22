class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        a = sorted(list(set(nums)), reverse=True)
        if len(a) > 2:
            return a[2]
        return a[0]