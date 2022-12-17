ans = []

def perm(a, b, cur, n):
    if len(cur) == n*2:
        ans.append(cur)
    
    if a < n:
        perm(a+1, b, cur+"(", n)
    if a > b and b < n:
        perm(a, b+1, cur+")", n)


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        ans.clear()
        a, b = ["("] * n, [")"] * n
        perm(0, 0, "", n)

        return ans
