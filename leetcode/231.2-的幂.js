/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n < 1) {
    return false
  } 
  while (n % 2 === 0) {
    n = n / 2
  }
  return n === 1
};
// @lc code=end

