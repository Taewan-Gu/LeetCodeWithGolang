class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        dic = dict()
        for i in nums:
            if dic.get(i):
                ans = i
            dic[i] = True
        
        for i in range(1, len(nums)+1):
            if not dic.get(i):
                return [ans, i]
