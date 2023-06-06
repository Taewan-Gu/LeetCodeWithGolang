class Solution:
    def average(self, salary: List[int]) -> float:
        return statistics.mean(sorted(salary)[1:-1])
