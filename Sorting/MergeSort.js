/**
 * 归并排序：
 *
 * @class MergeSort
 */

class MergeSort {

  constructor(){
    this.aux = [];
  }

  merge(nums, lo, mid, hi){
    let i = lo;
    let j = mid + 1;

    for(let k = lo; k <= hi; k++){
      this.aux[k] = nums[k];
    }

    for(let k = lo; k <= hi; k++) {
      if(i > mid) {
        nums[k] = this.aux[j++];
      } else if(j > hi) {
        nums[k] = this.aux[i++];
      } else if(this.aux[j] < this.aux[i]) {
        nums[k] = this.aux[j++];
      } else {
        nums[k] = this.aux[i++];
      }
    }
  }


  //自顶向下归并排序
  topDownSort(nums){
    this.fnHelpTopDownSort(nums, 0, nums.length - 1);
  }

  fnHelpTopDownSort(nums, lo, hi){
    if(hi <= lo) return;
    const mid = Math.floor((lo + hi) / 2);
    this.fnHelpTopDownSort(nums, lo, mid);
    this.fnHelpTopDownSort(nums, mid + 1, hi);
    this.merge(nums, lo, mid, hi);
  }


  // 自底向上归并排序
  bottomUpSort(nums) {
    const n = nums.length;
    for(let sz = 1; sz < n; sz = sz + sz) {
      for(let lo = 0; lo < n - sz; lo + = sz + sz) {
        this.merge(nums, lo+sz-1, Math.min(lo+sz+sz-1, n-1));
      }
    }
  }

}