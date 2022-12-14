class Solution:
    def intToRoman(self, num: int) -> str:
        ans = ""
        for i in [(1000, "M"), (100, "C"), (10, "X"), (1, "I")]:
            ans += i[1] * (num // i[0])
            num = num % i[0]

        dic = {
            "CCCCCCCCC": "CM",
            "CCCCC": "D",
            "CCCC": "CD",
            "XXXXXXXXX": "XC",
            "XXXXX": "L",
            "XXXX": "XL",
            "IIIIIIIII": "IX",
            "IIIII": "V",
            "IIII": "IV"
        }
        for key, value in dic.items():
            ans = ans.replace(key, value)

        return ans