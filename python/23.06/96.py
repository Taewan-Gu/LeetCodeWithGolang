class Solution:
    def numTrees(self, n: int) -> int:
        a = [1, 1, 2, 5]
        for i in range(4, 20):
            a.append(sum([a[j]*a[i-j-1] for j in range(i)]))
        return a[n]
