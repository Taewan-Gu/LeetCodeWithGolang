class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        cnt = 0
        for i in itertools.permutations(range(1,n+1),n):
            cnt += 1
            if cnt == k:
                return "".join(map(str, i))
