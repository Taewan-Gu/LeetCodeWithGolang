class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        matrix = [[0 for j in range(n)] for i in range(n)]
        ans = []
        visit = dict()
        xy = [(0,0)]
        dxy = [(0,1), (1,0), (0,-1), (-1,0)]
        d = 0
        cnt = 1

        while len(visit.keys()) != n * n:
            x, y = xy.pop()
            if not visit.get((x,y)):
                matrix[x][y] = cnt
                cnt += 1
            visit[(x,y)] = True
            rx = x + dxy[d][0]
            ry = y + dxy[d][1]
            if visit.get((rx,ry)):
                d += 1
                d %= 4
                xy.append((x, y))
            elif 0 <= rx < len(matrix) and 0 <= ry < len(matrix[0]):
                xy.append((rx,ry))
            else:
                d += 1
                d %= 4
                xy.append((x, y))
        
        return matrix
