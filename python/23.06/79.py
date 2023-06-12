class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        ans = [False]
        dij = [(1,0),(0,1),(-1,0),(0,-1)]

        def search(i, j, idx):
            if visit[i][j] or ans[0]:
                return
            if board[i][j] == word[idx]:
                if len(word) == idx+1:
                    ans[0] = True
                    return
                for ri, rj in dij:
                    if 0 <= i+ri < len(board) and 0 <= j+rj < len(board[0]):
                        visit[i][j] = True
                        search(i+ri, j+rj, idx+1)
                        visit[i][j] = False

        for i in range(len(board)):
            for j in range(len(board[0])):
                visit = [[False] * len(board[0]) for i in range(len(board))]
                search(i,j,0)

        return ans[0]

