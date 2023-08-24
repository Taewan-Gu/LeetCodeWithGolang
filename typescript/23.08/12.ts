function intToRoman(num: number): string {
    const roman = ["I", "V", "X", "L", "C", "D", "M"]
    let ans = ""
    const reversedNum = String(num).split("").reverse()
    for (let i=0; i<reversedNum.length; i++) {
        if (reversedNum[i] === "9") {
            ans = roman[i*2] + roman[i*2+2] + ans
        } else if (reversedNum[i] === "4") {
            ans = roman[i*2] + roman[i*2+1] + ans
        } else if (Number(reversedNum[i]) > 4) {
            ans = roman[i*2+1] + roman[i*2].repeat(Number(reversedNum[i])-5) + ans
        } else {
            ans = roman[i*2].repeat(Number(reversedNum[i])) + ans
        }
    }

    return ans
};
