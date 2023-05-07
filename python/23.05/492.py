class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        for i in range(1, int(area ** 0.5) + 1):
            if area % i == 0:
                ans = [area // i, i]
        
        return ans
