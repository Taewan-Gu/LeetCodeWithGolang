class Solution:
    def a(self, left, right):
        for i in range(left, right+1):
            for j in str(i):
                if j == '0' or i % int(j):
                    break
            else:
                yield i

    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        return list(self.a(left, right))
