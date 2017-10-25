/**
 * 父链接树
 * union-find
 *
 */

/**
 * quick-find
 *
 *
 */

class QuickFindUF {
  constructor(n){
    this.count = n;
    this.id = [];
    for(let i = 0; i < n; i++){
      this.id[i] = i;
    }
  }

  getCount(){
    return this.count;
  }

  //判断序号位p,q的值是否相等
  connected(p,q){
    return this.find(p) === this.find(q);
  }

  // 返回序号p对应的值
  find(p){
    return this.id[p];
  }

  // p到q连接=>数组中序号p位置存储值q
  union(p, q){
    const pID = this.find(p);
    const qID = this.find(q);
    if(qID === pID) return;

    for(let i = 0; i < this.id.length; i++) {
      if(this.id[i] == pID) {
        this.id[i] = qID;
      }
    }
    this.count--;
  }
}

/**
 * quick-union
 */

 class QuickUnionUF {
  constructor(n){
    this.count = n;
    this.id = [];
    for(let i = 0; i < n; i++){
      this.id[i] = i;
    }
  }

  getCount(){
    return this.count;
  }

  //判断序号位p,q的值是否相等
  connected(p,q){
    return this.find(p) === this.find(q);
  }

  find(p){
    while(p != this.id[p]) {
      p = this.id[p];
    }
    return p;
  }

  union(p, q){
    const pRoot = this.find(p);
    const qRoot = this.find(q);
    if(pRoot === qRoot) return;
    this.id[pRoot] = qRoot;
    this.count--;
  }

 }

 /**
  * 加权quick-union
  */

class WeightedQuickUnionUF {

  constructor(n) {
    this.count = n;
    this.id = [];
    this.sz = [];
    for(let i =0; i < n; i++ ) {
      this.id[i] = i;
      this.sz[i] = 1;
    }
  }

  getCount(){
    return this.count;
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }

  find(p) {
    while(p != this.id[p]) {
      p = this.id[p];
    }
    return p;
  }

  union(p,q){
    const i = this.find(p);
    const j = this.find(q);
    if(i === j) return;

    if(this.sz[i] < this.sz[j]) {
      this.id[i] = j;
      this.sz[j] += this.sz[i];
    } else {
      this.id[j] = i;
      this.sz[i] += this.sz[j];
    }
    this.count--;
  }
}
