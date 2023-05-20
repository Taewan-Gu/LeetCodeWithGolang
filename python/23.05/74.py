class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for i in range(len(matrix)):
            if matrix[i][0] > target:
                break
        else:
            i += 1
        i -= 1
        if i == -1:
            return False
        
        for j in matrix[i]:
            if j == target:
                return True
        
        return False
