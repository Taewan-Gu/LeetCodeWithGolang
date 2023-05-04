class Solution:
    def check(slef, board):
        for i in range(9):
            for j in range(9):
                if "." == board[i][j]:
                    return False
        return True

    def fill(self, board):
        candidates = [[[] for i in range(9)] for i in range(9)]
        check = True
        while check:
            check = False
            for r in range(9):
                for c in range(9):
                    if board[r][c] == ".":
                        candidates[r][c] = []
                        for num in range(1, 10):
                            for i in range(9):
                                if str(num) == board[r][i] or str(num) == board[i][c]:
                                    break
                                if str(num) == board[r//3 * 3 + i // 3][c//3 * 3 + i % 3]:
                                    break
                            else:
                                candidates[r][c].append(num)
                        if len(candidates[r][c]) == 1:
                            board[r][c] = str(candidates[r][c][0])
                            check = True
                        if len(candidates[r][c]) == 0:
                            return False
        if self.check(board):
            return True
        return candidates

    def solveSudoku(self, board: List[List[str]]) -> None:
        result = self.fill(board)
        if result == True:
            return
        candidates = result
        
        for i in range(9):
            for j in range(9):
                if candidates[i][j]:
                    cnt = 0
                    remove_list = []
                    for tmp in candidates[i][j]:
                        copied_board = [board[i][:] for i in range(9)]
                        copied_board[i][j] = str(tmp)
                        result = self.fill(copied_board)
                        if result == True:
                            if self.check(copied_board):
                                for i in range(9):
                                    for j in range(9):
                                        board[i][j] = copied_board[i][j]
                                return
                        elif result == False:
                            remove_list.append(tmp)

                    for rt in remove_list:
                        candidates[i][j].remove(rt)
