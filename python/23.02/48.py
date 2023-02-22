class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix)
        tmp = [[matrix[i][j] for j in range(n)] for i in range(n)]
        for i in range(n):
            for j in range(n):
                matrix[j][n-i-1] = tmp[i][j]
