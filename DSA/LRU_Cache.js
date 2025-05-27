class Node {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

class LRUC {
  constructor(cap) {
    this.cache = new Map();
    this.count = 0;
    this.cap = cap;
    this.head = null;
    this.tail = null;
  }

  use(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    let node = this.cache.get(key);
    if (node === this.head) {
      return;
    } else if (node === this.tail) {
      node.prev.next = null;
      this.tail = node.prev;
      node.next = this.head;
      node.prev = null;
      this.head.prev = node;
      this.head = node;
    } else {
      if (node.prev) {
        node.prev.next = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      }
      node.next = this.head;
      node.prev = null;
      this.head.prev = node;
      this.head = node;
    }
  }

  evict() {
    let keytoevict = this.tail ? this.tail.value : null;
    if (!this.tail) {
      return;
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }

    if (keytoevict) {
      this.cache.delete(keytoevict);
      this.count--;
    }
  }

  insert(key, value) {
    let node = new Node(key, value);
    this.count++;
    this.cache.set(key, node);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  put(key, value) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      node.value = value;
      this.use(key);
      this.cache.set(key, node);
    } else {
      if (this.count >= this.cap) {
        this.evict();
      }
      this.insert(key, value);
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.key, "->", current.value);
      current = current.next;
    }
  }
}

const lru = new LRUC(3);
lru.put(1, "a");
lru.put(2, "b");
lru.put(3, "c");
lru.put(4, "d");
lru.use(2);
lru.put(5, "e");
lru.display();
