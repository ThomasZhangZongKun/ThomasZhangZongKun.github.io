/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var count = 0
  for (var i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++
    }
  }
  return count
};

/**
 * 判断是否是质数
 * @param {*} n 
 */
var isPrime = function(n) {
  if (n < 2) {
    return false
  }
  // 小于更号n
  for (var i = 2; i < Math.sqrt ; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
// @lc code=end

