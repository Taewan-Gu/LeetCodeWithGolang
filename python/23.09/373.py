from heapq import heappush, heappop

class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        tmp = [(nums1[0] + nums2[0], 0, 0)]
        ans = []
        visit = dict()
        for _ in range(min(k, len(nums1) * len(nums2))):
            s, i, j = heappop(tmp)
            if j+1 < len(nums2) and not visit.get((i, j+1)):
                heappush(tmp, (nums1[i] + nums2[j+1], i, j+1))
                visit[(i, j+1)] = True
            if i+1 < len(nums1) and not visit.get((i+1, j)):
                heappush(tmp, (nums1[i+1] + nums2[j], i+1, j))
                visit[(i+1, j)] = True
            ans.append([nums1[i], nums2[j]])

        return ans
