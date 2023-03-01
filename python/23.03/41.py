class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        dic = dict()
        for i in nums:
            dic[i] = True
        for i in range(1, 10**5+2):
            if dic.get(i):
                continue    
            return i
