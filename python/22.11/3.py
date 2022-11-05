from collections import deque

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        dic, ans, arr = dict(), 0, deque([])

        for ch in s:
            while dic.get(ch):
                dic[arr.popleft()] = False
            
            arr.append(ch)
            ans = max(len(arr), ans)
            dic[ch] = True
        
        return ans