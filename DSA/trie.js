// Trie is a tree like data structure used to store and search string efficiently , specially application like autocomplete, spell checking and prefix based searching.

// Also called a prefix tree.
// Each node represents a character.
// Paths from root to leaf form strings.
// Efficient for searching words by prefix.
// Time complexity for search, insert, and delete is typically O(m) where m is the length of the word.

class TrieNode {
  constructor() {
    this.children = {};
    this.isend = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isend = true;
  }
  remove(node = this.root, word, depth = 0) {
    if (!node) return false;

    // Base case: If we reached the end of the word
    // console.log(node)
    if (depth === word.length) {
      if (node.isend) {
        node.isend = false;
      }

      // If node has no children, it's safe to delete
      return Object.keys(node.children).length === 0;
    }

    const char = word[depth];
    const child = node.children[char];

    if (!child) return false; // Word not found

    const shouldDeleteChild = this.remove(child, word, depth + 1);
    console.log(node);

    if (shouldDeleteChild) {
      delete node.children[char];
      return !node.isend && Object.keys(node.children).length === 0;
    }

    return false;
  }

  removeWord(word) {
    this.remove(this.root, word, 0);
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isend;
  }

  getWordWithPrefix(prefix) {
    let node = this.root;
    let result = [];
    for (let char of prefix) {
      if (!node.children[char]) return result;
      node = node.children[char];
    }

    return this.dfs(node, prefix, result);
  }

  dfs(node, prefix, result) {
    if (node.isend) {
      result.push(prefix);
    }
    for (let [key, value] of Object.entries(node.children)) {
      this.dfs(value, prefix + key, result);
    }
    return result;
  }
}

const trie = new Trie();
trie.insert("car");
trie.insert("cap");
trie.insert("cat");
trie.insert("dog");
// console.log(trie.search("cav"));
trie.removeWord("car");
// console.log(trie.getWordWithPrefix("d"));
