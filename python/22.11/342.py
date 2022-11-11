class Solution:
    def asd(self, n):
        if n == 1 or n == 4:
            return True
        if n < 4 or n % 4:
            return False
        
        return self.asd(n//4)
    
    def isPowerOfFour(self, n: int) -> bool:
        return self.asd(n)