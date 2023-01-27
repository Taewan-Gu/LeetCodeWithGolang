class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        dic = collections.defaultdict(int)
        for i in range(len(nums)):
             dic[nums[i]] += 1
        for k, v in dic.items():
            while v > 4:
                nums.remove(k)
                v -= 1

        a, ans = [], set()
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                a.append((nums[i] + nums[j], i, j))
        
        a.sort(key=lambda x:x[0])
        aa = list(map(lambda x:x[0], a))
        for v, i, j in a:
            b = target - v
            for k in range(bisect.bisect_left(aa, b), bisect.bisect_right(aa, b)):
                kk, ii, jj = a[k]
                if i == ii or i == jj or j == ii or j == jj:
                    continue
                ans.add(tuple(sorted([nums[i], nums[ii], nums[j], nums[jj]])))
        
        return list(ans)
