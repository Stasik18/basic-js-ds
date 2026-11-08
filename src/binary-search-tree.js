const { NotImplementedError } = require("../lib");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      this._root = new Node(data);
    } else {
      this.insert(this._root, data);
    }
  }

  insert(node, data) {
    if (node.data <= data) {
      if (node.right === null) {
        node.right = new Node(data);
      } else {
        this.insert(node.right, data);
      }
    } else {
      if (node.left === null) {
        node.left = new Node(data);
      } else {
        this.insert(node.left, data);
      }
    }
  }

  find(data, node = this._root) {
    const cirrentNode = node;

    if (cirrentNode === null) return null;

    if (cirrentNode.data === data) return cirrentNode;
    if (cirrentNode.data < data) return this.find(data, cirrentNode.right);
    if (cirrentNode.data > data) return this.find(data, cirrentNode.left);
  }

  has(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  min() {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }
}

module.exports = {
  BinarySearchTree,
};
