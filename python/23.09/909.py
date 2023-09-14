class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        # 보드 재조정
        for i in range(len(board)-2, -1, -2):
            board[i].reverse()
        board.reverse()

        q = collections.deque([1])
        n, m = len(board), len(board[0])
        cnt, max_cnt = 0, n * m
        visit = [False] * (max_cnt+1)
        while q:
            cnt += 1
            for _ in range(len(q)):
                s = q.popleft()
                for i in range(1, 7):
                    if s+i > max_cnt:
                        break
                    if visit[s+i]:
                        continue
                    visit[s+i] = True
                    arrival = s+i
                    if board[(s+i-1)//m][(s+i)%m - 1] != -1:
                        arrival = board[(s+i-1)//m][(s+i)%m - 1]
                    if arrival == max_cnt:
                        return cnt
                    q.append(arrival)
        return -1
