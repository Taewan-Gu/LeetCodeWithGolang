# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        s, e = 1, n
        while True:
            mid = (s+e) // 2
            a = guess(mid)
            if a == -1:
                e = mid
            elif a == 0:
                return mid
            else:
                s = mid + 1
            