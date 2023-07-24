/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const row = new Set()
        const col = new Set()
        for (let j = 0; j < matrix.length; j++) {
            row.add(matrix[i][j])
            col.add(matrix[j][i])
        }

        if (row.size !== matrix.length || col.size !== matrix.length) {
            return false
        }
    }

    return true
};
