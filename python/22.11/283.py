class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        tmp = []
        zeros = []
        while nums:
            a = nums.pop()
            if a == 0:
                zeros.append(0)
            else:
                tmp.append(a)
        for i in list(reversed(tmp)) + zeros:
            nums.append(i)
        