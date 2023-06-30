/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let cnt = 10 ** 9
    let ans = []
    for (let i in list1) {
        for (let j in list2) {
            if (list1[i] === list2[j]) {
                if (cnt > Number(i) + Number(j)) {
                    cnt = Number(i) + Number(j)
                    ans = [list1[Number(i)]]
                } else if (cnt === Number(i) + Number(j)) {
                    ans.push(list1[i])
                }
            }
        }
    }

    return ans
};
