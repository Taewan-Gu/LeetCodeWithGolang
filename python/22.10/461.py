class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        x = bin(x)[::-1]
        y = bin(y)[::-1]
        a = 0
        x, y = x if len(x) > len(y) else y, y if len(x) > len(y) else x 
        for i in range(len(x)):
            if x[i] == "b":
                break
            if x[i] != (y[i] if len(y) - i > 2 else "0"):
                a += 1
        return a