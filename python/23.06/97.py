class Solution:
    def __init__(self):
        self.ch = False

    @cache
    def findString(self, s1, s2, s3, idx1, idx2, idx3):
        if idx1 == len(s1) and idx2 == len(s2) and idx3 == len(s3):
            self.ch = True
        if self.ch:
            return
        if idx1 != len(s1) and idx3 != len(s3) and s1[idx1] == s3[idx3]:
            self.findString(s1, s2, s3, idx1 + 1, idx2, idx3 + 1)
        if idx2 != len(s2) and idx3 != len(s3) and s2[idx2] == s3[idx3]:
            self.findString(s1, s2, s3, idx1, idx2 + 1, idx3 + 1)
        
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        self.findString(s1, s2, s3, 0, 0, 0)
        return self.ch
    
    # 이거 말고도 dp n * m 방식으로 각 s1, s2 글자가 해당 위치에 올 수 있는가를 확인한다면 문제를 풀 수 있음.
