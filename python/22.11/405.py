class Solution:
    def toHex(self, num: int) -> str:
        if num >= 0:
            return hex(num)[2:]
        else:
            return hex(16 ** 8 + num)[2:]