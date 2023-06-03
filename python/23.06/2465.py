class Solution:
    def distinctAverages(self, nums: List[int]) -> int:
        nums.sort()
        q = collections.deque(nums)
        ans = set()
        while q:
            ans.add((q.popleft() + q.pop()) / 2)
        return len(ans)
