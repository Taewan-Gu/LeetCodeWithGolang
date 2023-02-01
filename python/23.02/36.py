from collections import defaultdict

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        row, col, sqr = defaultdict(dict), defaultdict(dict), defaultdict(dict)
        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j] != ".":
                    if row[i].get(board[i][j]):
                        return False
                    row[i][board[i][j]] = True
                    if col[j].get(board[i][j]):
                        return False
                    col[j][board[i][j]] = True
                    if sqr[str(i//3 * 3 + 3) + str(j//3 * 3 + 3)].get(board[i][j]):
                        return False
                    sqr[str(i//3 * 3 + 3) + str(j//3 * 3 + 3)][board[i][j]] = True
        
        return True
