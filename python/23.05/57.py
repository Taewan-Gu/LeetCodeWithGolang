class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        intervals.append(newInterval)
        intervals.sort()
        ans = []
        ts, te = intervals[0][0], intervals[0][1]
        for s, e in intervals:
            if ts <= s <= te:
                te = max(e, te)
            else:
                ans.append([ts, te])
                ts = s
                te = max(e, te)
        if not ans or ans[-1][0] != ts or ans[-1][1] != te:
            ans.append([ts, te])

        return ans
