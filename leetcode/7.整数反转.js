/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var num = x > 0 ? x : -x
  var numReverse = 0
  while (num > 0) {
    var digit = num % 10
    num = (num - digit) / 10
    numReverse = digit + numReverse * 10
  }
  return x > 0 ? numReverse : -numReverse
};
// @lc code=end

