// In the Heap, highest (or lowest) priority element is always stored at the root.
// Heap is the most usefull data structure, when it is necessary to repeatedly remove the object with the highest (or lowest) priority.

class Heap {
  constructor() {
    this.root = [];
  }

  insert(ele) {
    if (this.root.length === 0) {
      this.root.push(ele);
      return;
    }
    this.root.push(ele);
    let lastNonLeafNode = Math.floor(this.root.length / 2 - 1);
    for (let i = lastNonLeafNode; i >= 0; i--) {
      this.maxHeapify(this.root, i);
    }
  }

  delete(ele) {
    let list = this.root;
    if (this.root.length === 0) {
      return;
    }
    let i;
    for (i = 0; i < this.root.length; i++) {
      if (this.root[i] === ele) {
        break;
      }
    }
    if (i !== this.root.length) {
      [list[i], list[list.length - 1]] = [list[list.length - 1], list[i]];
      list.pop();
      let lastNonLeafNode = Math.floor(list.length / 2 - 1);
      for (let i = lastNonLeafNode; i >= 0; i--) {
        this.maxHeapify(list, i);
      }
      return "Deleted";
    }
  }

  maxHeapify(list, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * +2;

    if (l < list.length && list[l] > list[largest]) {
      largest = l;
    }
    if (r < list.length && list[r] > list[largest]) {
      largest = r;
    }

    if (largest !== i) {
      [list[i], list[largest]] = [list[largest], list[i]];
      this.maxHeapify(list, largest);
    }
  }

  extractMax() {
    if (this.root.length === 0) return "list is empty";
    let top = this.root[0];
    this.delete(top);
    return top;
  }
  size() {
    return this.root.length;
  }
  isEmpty() {
    return this.root.length === 0;
  }
}

const heap = new Heap();
heap.insert(4);
heap.insert(3);
heap.insert(2);
heap.insert(1);
console.log(heap.extractMax());
console.log(heap.extractMax());
