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
    const currentNode = node;

    if (currentNode === null) return null;

    if (currentNode.data === data) return currentNode;
    if (currentNode.data < data) return this.find(data, currentNode.right);
    if (currentNode.data > data) return this.find(data, currentNode.left);
  }

  has(data) {
    return Boolean(this.find(data));
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      if (node.left === null) return node.right;

      if (node.right === null) return node.left;

      let successor = node.right;

      while (successor.left !== null) {
        successor = successor.left;
      }

      node.data = successor.data;

      node.right = this._removeNode(node.right, successor.data);
    }

    return node;
  }

  min(node = this._root) {
    const currentNode = node;

    if (currentNode === null) return null;
    if (currentNode.left === null) return currentNode.data;

    return this.min(currentNode.left);
  }

  max(node = this._root) {
    const currentNode = node;

    if (currentNode === null) return null;
    if (currentNode.right === null) return currentNode.data;

    return this.max(currentNode.right);
  }
}

module.exports = {
  BinarySearchTree,
};
