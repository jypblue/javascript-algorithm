/**
 * 二分查找：
 *
 *
 * @class BinarySearch
 */

class BinarySearch {

  /**
   * @param {any} [nums=[]] 有序数组
   * @param {string} [target=''] 目标值
   * @returns {Number} [index] 坐标位置
   * @memberof BinarySearch
   */
  rank(nums = [], target = '') {
    let lo = 0;
    let hi = nums.length - 1;
    let index = -1;

    while(lo <= hi) {
      let mid = Math.floor((lo + hi)/2);

      if(nums[mid] == target) index = mid;

      if(nums[mid] < target) {
        lo = mid + 1;
      } else if(nums[mid] > target) {
        hi = mid - 1;
      }
    }
    return index;
  };


  // 欧几里得求最大公约数
  gcd(p, q) {
    if(q === 0) return p;
    let r = p % q;
    return this.gcd(q, r);
  }

}