class Solution:
    def frequencySort(self, s: str) -> str:
        dic = collections.defaultdict(int)
        for i in s:
            dic[i] += 1
        
        ans = ""
        for i in sorted(list(dic.keys()), key=lambda x: dic[x], reverse=True):
            ans += i*dic[i]

        return ans
