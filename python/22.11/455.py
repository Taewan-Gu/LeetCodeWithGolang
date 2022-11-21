class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        ans = 0
        j = 0
        for i in g:
            while j < len(s):
                if i <= s[j]:
                    j += 1
                    ans += 1
                    break
                j += 1
        return ans
                