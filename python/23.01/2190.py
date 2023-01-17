class Solution:
    def mostFrequent(self, nums: List[int], key: int) -> int:
        dic = collections.defaultdict(int)
        for i in range(len(nums)-1):
            if nums[i] == key:
                dic[nums[i+1]] += 1
        fi, ans = 0, 0
        for key, value in dic.items():
            if value > fi:
                ans = key
                fi = value
        
        return ans
