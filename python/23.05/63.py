class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        ex, ey = len(obstacleGrid), len(obstacleGrid[0])
        if obstacleGrid[0][0] == 1:
            return 0
        ans = [[0] * ey for i in range(ex)]
        for i in range(ey):
            if obstacleGrid[0][i] == 1:
                break
            ans[0][i] = 1
        for i in range(1, ex):
            if obstacleGrid[i][0] == 1:
                break
            ans[i][0] = 1
        for i in range(1, ex):
            for j in range(1, ey):
                if obstacleGrid[i][j] == 1:
                    continue
                ans[i][j] = ans[i-1][j] + ans[i][j-1]

        return ans[-1][-1]
