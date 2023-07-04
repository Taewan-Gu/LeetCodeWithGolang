/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let col = 0
    let row = 0
    for (x of moves) {
        if (x === "L") {
            row += 1
        } else if (x === "R") {
            row -= 1
        } else if (x === "U") {
            col += 1
        } else {
            col -= 1
        }
    }

    return col === 0 && row === 0
};
