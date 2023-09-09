class MedianFinder:
    def __init__(self):
        self.arr = []
        self.ch = False
        self.count = 0

    def addNum(self, num: int) -> None:
        self.arr.append(num)
        self.ch = True
        self.count += 1

    def findMedian(self) -> float:
        if self.ch:
            self.arr.sort()
            self.ch = False
        if self.count%2:
            return self.arr[self.count//2]
        return (self.arr[self.count//2-1] + self.arr[self.count//2]) / 2
