class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dic = collections.defaultdict(list)
        for s in strs:
            t = "".join(sorted(list(s)))
            dic[t].append(s)
        return dic.values()
