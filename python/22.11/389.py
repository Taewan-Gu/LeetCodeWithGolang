class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        dic = collections.defaultdict(int)
        for i in s:
            dic[i] += 1
        
        for j in t:
            dic[j] -= 1

        for k, v in dic.items():
            if v:
                return k
