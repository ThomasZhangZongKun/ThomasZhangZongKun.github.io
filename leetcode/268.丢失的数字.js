/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 先确定这个数组的长度,在通过
var missingNumber = function(nums) {
  // l 等于输入的数的长度+1
  var l = nums.length + 1 
  // 给flags 一个空数组
  var flags = []
 // for循环:
  for (var i = 0; i < l; i++) {
    flags[i] = 0 
  }
  // 第二个for循环的结果是作为第一循环结果的下标
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i]
    flags[num] = 1
  }
  for (var i =0; i < l; i++) {
    if (flags[i] === 0) {
      return i
    }
  }
};
// @lc code=end

