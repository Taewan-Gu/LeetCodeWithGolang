class Solution:
    def fib(self, n: int) -> int:
        a = [0, 1]
        i = 1
        while i < n:
            a.append(a[i - 1] + a[i])
            i += 1
        
        return a[n]
