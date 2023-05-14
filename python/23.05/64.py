class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        sum_grid = [[-1] * len(grid[i]) for i in range(len(grid))]
        sum_grid[0][0] = grid[0][0]

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if j > 0 and i > 0:
                    sum_grid[i][j] = min(sum_grid[i-1][j], sum_grid[i][j-1]) + grid[i][j]
                elif i > 0:
                    sum_grid[i][j] = sum_grid[i-1][j] + grid[i][j]
                elif j > 0:
                    sum_grid[i][j] = sum_grid[i][j-1] + grid[i][j]
                        
        return sum_grid[-1][-1]
