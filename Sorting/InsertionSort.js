/**
 * 插入排序：
 *
 *
 * @class InsertionSort
 */
class InsertionSort {
  sort(nums) {
    const n = nums.length;
    for(let i = 0; i < n; i++) {
      for(let j = i; j > 0 && nums[j] < nums[j-1];j--) {
        swap(nums,j,j-1);
      }
    }
  }

  swap(nums, next, prev) {
    let temp = nums[next];
    nums[next] = nums[prev];
    nums[prev] = temp;
  }
}