class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        return max(-2147483648, dividend // divisor + 1) if dividend // divisor < 0 and dividend % divisor else min(dividend // divisor, 2147483647)
