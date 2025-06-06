class Graph {
  constructor() {
    this.map = new Map();
  }

  addVertex(a, b) {
    if (this.map.has(a)) {
      this.map.get(a).push(b);
    } else {
      this.map.set(a, [b]);
    }
  }
  display() {
    for (let [node, neighbour] of this.map) {
      console.log(`${node} -> ${neighbour.join(",")}`);
    }
  }
  dfs(start) {
    const visited = new Set();
    const search = (node) => {
      if (!node || visited.has(node)) return;
      console.log(node);
      visited.add(node);
      const neighbours = this.map.get(node) || [];
      for (let neighbour of neighbours) {
        search(neighbour);
      }
    };
    search(start);
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];
    while (queue.length > 0) {
      const node = queue.shift();
      if (!visited.has(node)) {
        console.log(node);
        visited.add(node);
        const neighbours = this.map.get(node) || [];
        for (let neighbour of neighbours) {
          if (!visited.has(neighbour)) {
            queue.push(neighbour);
          }
        }
      }
    }
  }
}

const g = new Graph();
g.addVertex("A", "B");
g.addVertex("A", "C");
g.addVertex("B", "D");
g.addVertex("C", "D");
// g.display();
console.log("DFS:");
g.dfs("A");
console.log("BFS:");
g.bfs("A");
