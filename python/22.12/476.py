class Solution:
    def findComplement(self, num: int) -> int:
        ch = 0
        for i in range(100):
            if 2**i > num:
                ch = 2**i - 1
                break
        
        return num^ch