class Queue {
  constructor() {
    this.items = [];
  }

  // Add item to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove item from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Peek at the front item
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // View the entire queue
  printQueue() {
    console.log(this.items.join(" <- "));
  }
}

class StackUsingQueue {
  constructor() {
    this.queue = new Queue();
  }

  push(ele) {
    this.queue.enqueue(ele);
    let size = this.queue.size();
    while (size > 1) {
      let x = this.queue.dequeue();
      this.queue.enqueue(x);
      size--;
    }
  }

  peek() {
    if (this.queue.isEmpty()) {
      return "Stack is empty";
    }
    return this.queue.front();
  }

  pop() {
    return this.queue.dequeue();
  }
  isEmpty() {
    return this.queue.isEmpty();
  }

  size() {
    return this.queue.size();
  }
}

const stack = new StackUsingQueue();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 2
