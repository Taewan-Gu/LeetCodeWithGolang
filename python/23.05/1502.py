class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        arr.sort()
        if len(arr) > 1:
            b = arr[0] - arr[1]
        for i in range(1, len(arr)):
            if b != arr[i-1] - arr[i]:
                return False
        return True
