/**
 * 插入排序：
 *
 *
 * @class InsertionSort
 */

class InsertionSort {
  sort(nums) {
    const n = nums.length;
    for(let i = 1; i < n; i++) {
      for(let j = i; j > 0 && nums[j] < nums[j-1];j--) {
        this.swap(nums,j,j-1);
      }
    }
  }

  swap(nums, hi, lo) {
    let temp = nums[hi];
    nums[hi] = nums[lo];
    nums[lo] = temp;
  }
}