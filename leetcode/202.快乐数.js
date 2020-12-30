/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  // while 循环一直都是正确的
  while(true) {
    var sum = 0;
    while (n > 0) {
      var digit = n % 10;
      n  = (n -digit) / 10;
      sum += digit * digit;
    }
    if (sum == 1) {
      return true
    } else if (sum == 4) {
      return false
    } else {
      n = sum
    }  
  }
};
// @lc code=end


