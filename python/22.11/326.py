class Solution:
    def asd(self, n):
        if n == 1 or n == 3:
            return True
        if n < 3 or n % 3:
            return False
        
        return self.asd(n//3)
    
    def isPowerOfThree(self, n: int) -> bool:
        return self.asd(n)