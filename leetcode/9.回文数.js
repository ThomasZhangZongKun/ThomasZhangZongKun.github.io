/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var digit = 0
  var numReverse = 0
  var num = x
  if (num < 0) {
    return false
  }
  while (num > 0) {
    digit = num % 10;
    num = (num -digit) / 10;
    numReverse = digit + numReverse * 10
  }
    return numReverse === x
};
// @lc code=end

