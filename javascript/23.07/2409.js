/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const daysByMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let [month1, day1] = arriveAlice.split("-")
    let [month2, day2] = arriveBob.split("-")
    let startMonth, startDay, endMonth, endDay
    if (Number(month1) > Number(month2)) {
        startMonth = Number(month1)
        startDay = Number(day1)
    } else if (Number(month1) < Number(month2)) {
        startMonth = Number(month2)
        startDay = Number(day2)
    } else {
        startMonth = Number(month2)
        startDay = Math.max(Number(day2), Number(day1))
    }

    let [month3, day3] = leaveAlice.split("-")
    let [month4, day4] = leaveBob.split("-")
    if (Number(month3) < Number(month4)) {
        endMonth = Number(month3)
        endDay = Number(day3)
    } else if (Number(month3) > Number(month4)) {
        endMonth = Number(month4)
        endDay = Number(day4)
    } else {
        endMonth = Number(month4)
        endDay = Math.min(Number(day4), Number(day3))
    }

    if (startMonth === endMonth) {
        return Math.max(0, endDay - startDay + 1)
    }

    let ans = 0
    for (let i = startMonth; i < endMonth + 1; i++) {
        if (i === startMonth) {
            ans += daysByMonth[i-1] - startDay + 1
        } else if (i === endMonth) {
            ans += endDay
        } else {
            ans += daysByMonth[i-1]
        }
    }

    return Math.max(0, ans)
};
