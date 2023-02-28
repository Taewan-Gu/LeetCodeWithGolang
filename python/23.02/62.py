class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        a = [[1]*n for i in range(m)]
        for i in range(1, m):
            for j in range(1, n):
                a[i][j] = a[i-1][j] + a[i][j-1]
        
        return a[-1][-1]
