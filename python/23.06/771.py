class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        dic = dict()
        for j in jewels:
            dic[j] = True
        
        return sum([1 if dic.get(s) else 0 for s in stones])
