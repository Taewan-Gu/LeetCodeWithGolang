class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        dxy = [(0,1), (1,0), (-1,0), (0,-1)]
        rowlen, collen = len(board), len(board[0])
        dic = dict()

        def dfs(x, y, word):
            dic[word] = True
            if len(word) == 10:
                return
            for dx, dy in dxy:
                rx, ry = x + dx, y + dy
                if 0 <= rx < rowlen and 0 <= ry < collen and not visit[rx][ry]:
                    visit[rx][ry] = True
                    dfs(rx, ry, word + board[rx][ry])
                    visit[rx][ry] = False

        for i in range(rowlen):
            for j in range(collen):
                visit = [[False] * len(_) for _ in board]
                visit[i][j] = True
                dfs(i, j, board[i][j])

        return list(filter(lambda x: dic.get(x), words))

