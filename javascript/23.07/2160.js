/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const splitedNum = String(num).split("").sort()
    return (Number(splitedNum[0]) + Number(splitedNum[1])) * 10 + Number(splitedNum[2]) + Number(splitedNum[3])
};
