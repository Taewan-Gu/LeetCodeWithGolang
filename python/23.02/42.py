class Solution:
    def trap(self, height: List[int]) -> int:
        en = list(enumerate(height))
        en.sort(key=lambda x: x[1], reverse=True)
        sort, be = [], -1
        for i, _ in en:
            if i > be:
                sort.append(i)
                be = i

        if not sort:
            return 0
            
        ans, m, s = 0, 0, sort[0] + 1
        for i in range(sort[0]):
            if height[i] > m:
                m = height[i]
            ans += m - height[i]
            
        for j in sort[1:]:
            m = height[j]
            for i in range(s, j+1):
                ans += m - height[i]
            s = j+1

        return ans
