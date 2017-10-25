/**
 * 希尔排序：
 *
 *
 * @class ShellSort
 */

class ShellSort {

  sort(nums) {
    const n = nums.length;
    let h = 1;
    while(h < n/3) h = 3*n + 1;
    while( h >=1) {
      for(let i = h; i < n; i++) {
        for(let j = i; j >=h && nums[j] < nums[j-1]; j -= h) {
          this.swap(nums, j, j-h);
        }
      }
      h = h/3;
    }
  }

  swap(nums, hi, lo) {
    let temp = nums[hi];
    nums[hi] = nums[lo];
    nums[lo] = temp;
  }


}