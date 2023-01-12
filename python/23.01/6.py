class Solution:
    def convert(self, s: str, numRows: int) -> str:
        ans = [[] for i in range(numRows)]
        if numRows == 1:
            return s
            
        idx, div = 0, numRows-1
        ans[idx].append(s[idx])
        for i in range(1, len(s)):
            idx += 1 if (i-1)//div%2==0 else -1
            ans[idx].append(s[i])

        return "".join(["".join(i) for i in ans])
