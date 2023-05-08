class Solution:
    def longestValidParentheses(self, s: str) -> int:
        s = s.lstrip(")")
        s = s.rstrip("(")
        if len(s) > 1000:    
            right_count_more_than_left = len(s) - s.count("(") * 2
            remove_count = abs(right_count_more_than_left)
            if right_count_more_than_left < 0:
                if remove_count:
                    for i in range(len(s)):
                        if s[i] == "(":
                            remove_count -= 1
                        else:
                            break
                        if remove_count == 0:
                            break
                    s = s[i+1:]

        ans, j = 0, 0
        while j < len(s):
            cnt, an = 0, 0
            for i in range(j, len(s)):
                if s[i] == "(":
                    cnt += 1
                else:
                    cnt -= 1
                an += 1
                if cnt < 0:
                    j = i + 1
                    break
                if cnt == 0:
                    ans = max(an, ans)
            else:
                j += 1

        return ans

