class Solution:
    def splitNum(self, num: int) -> int:
        dic = collections.defaultdict(int)
        for i in str(num):
            dic[int(i)] += 1
        a = []
        for i in range(10):
            for j in range(dic[i]):
                a.append(i)
        b, c = "", ""
        for i in range(len(a)):
            if i%2:
                b += str(a[i])
            else:
                c += str(a[i])
        
        return int(b) + int(c)
