/**
 * 快速排序：
 *
 *
 * @class QuickSort
 */
class QuickSort {

  sort(nums) {
    this.quickSort(nums, 0, nums.length - 1);
    this.quick3sort(nums, 0, nums.length - 1);
  }

  /**
   * 三向切分
   *
   * @param {any} nums
   * @param {any} lo
   * @param {any} hi
   * @returns
   * @memberof QuickSort
   */
  quick3sort(nums, lo, hi) {
    if(hi <= lo) return;
    let lt = lo;
    let i = lo+1;
    let gt = hi;
    const v = nums[lo];
    while(i <=gt) {
      const cmp = nums[i] - v;
      if(cmp < 0) {
        this.swap(nums,lt++,i++)
      } else if(cmp > 0) {
        this.swap(nums, i, gt--);
      } else {
        i++;
      }
    }
    this.quick3sort(nums, lo, lt-1);
    this.quick3sort(nums, gt+1, hi);
  }
  quickSort(nums, lo, hi) {
    if(hi >= lo) {
      return;
    }

    const j = this.partition(nums, lo, hi);
    this.quickSort(nums, lo, j-1);
    this.quickSort(nums, j+1, hi);
  }

    //切分
  partition(nums, lo, hi) {
    let i = lo;
    let j = hi + 1;
    const v = nums[lo];
    while(true) {
      while(nums[++i] < v){
        if(i == hi) break;
      }
      while(v < nums[--j]) {
        if(j==lo) {
          break;
        }
      }
      this.swap(nums, i, j);
    }

    this.swap(nums, lo, j);
    return j;
  }

  swap(nums, hi, lo) {
    let temp = nums[hi];
    nums[hi] = nums[lo];
    nums[lo] = temp;
  }

}

// 三取样切分
class Quick3way {

}
