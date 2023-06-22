class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        ans, wl1, wl2 = 0, len(word1), len(word2)
        q = deque([(0,0)])
        visited = dict()
        while len(q) > 0:
            for _ in range(len(q)):
                i, j = q.popleft()
                if visited.get((i,j)):
                    continue
                visited[(i, j)] = True
                while i < wl1 and j < wl2 and word1[i] == word2[j]:
                    i += 1
                    j += 1
                if i == wl1 and j == wl2:
                    return ans
                q.extend([(i, j + 1), (i + 1, j + 1), (i + 1, j)])
            ans += 1
