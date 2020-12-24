/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  var res = 0
  if (num === 0) {
    return false
  }
  var res = 0
  for (var i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      res += i
    }
  }
  return res == num
};
// @lc code=end

