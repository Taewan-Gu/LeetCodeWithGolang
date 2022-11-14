class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        dic = collections.defaultdict(int)
        for i in magazine:
            dic[i] += 1
        
        for i in ransomNote:
            dic[i] -= 1
            if dic[i] == -1:
                return False
        return True