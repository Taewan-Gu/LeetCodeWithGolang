class Solution:
    def longestPalindrome(self, s: str) -> int:
        dic = collections.defaultdict(int)
        for i in s:
            dic[i] += 1
        
        ans = 0
        ch = 0
        for k, v in dic.items():
            ans += v - v % 2
            if v % 2:
                ch = 1
        
        return ans + ch