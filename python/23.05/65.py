class Solution:
    def isNumber(self, s: str) -> bool:
        try:
            float(s)
            if s.lower() in ["+inf", "inf", "-inf", "infinity", "+infinity", "-infinity"]:
                raise Exception()
        except:
            if s[0] == ".":
                try:
                    if s[1] in ["-", "+"]:
                        raise Exception()
                    int(s[1:])
                except:
                    return False
            elif s[-1] == ".":
                try:
                    int(s[:-1])
                except:
                    return False
            elif "e" in s:
                try:
                    a, b = s.split("e")
                    if "." in b:
                        raise Exception()
                    float(a)
                    float(b)
                except:
                    return False
            else:
                return False
        return True
