class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        dic = dict()
        for i in range(len(list1)):
            dic[list1[i]] = i
        
        ans = []
        ansi = float('inf')

        for i in range(len(list2)):
            if dic.get(list2[i]) != None:
                if dic[list2[i]] + i < ansi:
                    ansi = dic[list2[i]] + i 
                    ans = [list2[i]]
                elif dic[list2[i]] + i == ansi:
                    ans.append(list2[i])
        
        return ans
