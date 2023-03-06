class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        dic, cnt = dict(), 0
        for i in arr:
            dic[i] = True
        for i in range(1, 2001):
            if not dic.get(i):
                cnt += 1
            if cnt == k:
                return i
