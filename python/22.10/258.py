class Solution:
    def splitNum(self, num: int) -> int:
        sn = str(num)
        if len(sn) == 1:
            return num
        return self.splitNum(sum([int(s) for s in sn]))
    
    def addDigits(self, num: int) -> int:
        return self.splitNum(num)