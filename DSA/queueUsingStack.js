class queueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(ele) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack2.push(ele);
    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.length > 0) {
      return this.stack1.pop();
    }
  }

  peek() {
    if (this.stack1.length > 0) {
      return this.stack1[this.stack1.length - 1];
    }
  }

  isEmpty() {
    return this.stack1.length === 0;
  }

  size() {
    return this.stack1.length;
  }

  clear() {
    this.stack1 = [];
    this.stack2 = [];
  }
}

const queue = new queueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
