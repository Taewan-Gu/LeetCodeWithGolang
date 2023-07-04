/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    let [leftExpression, rightExpression] = equation.split("=")
    let xCnt = 0
    let total = 0
    
    for (const splitedValueByPlus of leftExpression.split("+")) {
        let value = 0
        const splitedValueByMinus = splitedValueByPlus.split("-")
        for (let i in splitedValueByMinus) {
            const splitedValueByX = splitedValueByMinus[i].split("x")
            if (splitedValueByX.length === 1) {
                if (i !== "0") {
                    value -= Number(splitedValueByMinus[i])
                } else {
                    value = Number(splitedValueByMinus[i])
                }
            } else {
                let xCntInValue = 1
                if (splitedValueByX[0] !== "") {
                    xCntInValue = Number(splitedValueByX[0])
                }
                if (i !== "0") {
                    xCnt -= xCntInValue
                } else {
                    xCnt += xCntInValue
                }
            }
        }
        total += value
    }

    for (const splitedValueByPlus of rightExpression.split("+")) {
        let value = 0
        const splitedValueByMinus = splitedValueByPlus.split("-")
        for (let i in splitedValueByMinus) {
            const splitedValueByX = splitedValueByMinus[i].split("x")
            if (splitedValueByX.length === 1) {
                if (i !== "0") {
                    value += Number(splitedValueByMinus[i])
                } else {
                    value = -Number(splitedValueByMinus[i])
                }
            } else {
                let xCntInValue = 1
                if (splitedValueByX[0] !== "") {
                    xCntInValue = Number(splitedValueByX[0])
                }
                if (i !== "0") {
                    xCnt += xCntInValue
                } else {
                    xCnt -= xCntInValue
                }
            }
        }
        total += value
    }

    if (xCnt === 0 && total === 0) {
        return "Infinite solutions"
    } else if (xCnt === 0) {
        return "No solution"
    }
    return `x=${-total/xCnt}`
};
