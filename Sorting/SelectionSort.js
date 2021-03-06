
/**
 * 选择排序：
 * 首先，找到数组中最小的那个元素，其次，将它和数组的第一个元素交换位置（如果第一个元素就是最小元素那么它就和自己交换）。
 * 再次，在剩下的元素中找到最小的元素，将它与数组的第二个元素交换位置。如此往复，直到将整个数组排序。
 * 时间复杂度O(n*n)
 * @class SelectionSort
 */
class SelectionSort {

  sort(nums) {
    const n = nums.length;
    for(let i = 0; i < n; i++) {
      let min = i;
      for(let j = i+1; j < n; j++ ) {
        if(nums[j] < nums[min]) {
          min = j;
        }
        this.swap(nums, i, min);
      }
    }
  }

  swap(nums, hi, lo){
    let temp = nums[hi];
    nums[hi] = nums[lo];
    nums[lo] = temp;
  }

}