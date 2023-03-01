class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        arr.sort()
        m = float('inf')
        ans = []
        for i in range(len(arr)-1):
            m = min(m, arr[i+1] - arr[i])
        
        for i in range(len(arr)-1):
            if arr[i+1] - arr[i] == m:
                ans.append([arr[i], arr[i+1]])
        
        return ans
