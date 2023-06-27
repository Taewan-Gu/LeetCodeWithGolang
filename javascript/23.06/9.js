/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return Array.from(String(x)).reduce((x, ch)  => ch + x, "") === String(x)
};
