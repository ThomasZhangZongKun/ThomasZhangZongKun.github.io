/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) {
    return true
  }
  for (var i = 2; i <= num / 2; i++) {
    if (i * i === num)
    return true
  } return false
};
// @lc code=end

