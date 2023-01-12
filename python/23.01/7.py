class Solution:
    def reverse(self, x: int) -> int:
        num = int("-"+str(x)[:0:-1]) if x < 0 else int(str(x)[::-1])
        return 0 if abs(num) > 2**31 or num == 2**31 else num
