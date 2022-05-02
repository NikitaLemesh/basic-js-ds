const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data);
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return;
      }

      if (node.data < data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    const result = checkIfNodeInTree(this.rootTree, data);
    function checkIfNodeInTree(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data < data) {
        return checkIfNodeInTree(node.right, data);
      } else {
        return checkIfNodeInTree(node.left, data);
      }
    }
    if (result) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    const result = checkIfNodeInTree(this.rootTree, data);
    function checkIfNodeInTree(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return data;
      }
      if (node.data < data) {
        return checkIfNodeInTree(node.right, data);
      } else {
        return checkIfNodeInTree(node.left, data);
      }
    }
    if (result) {
      return { data: result };
    } else {
      return result;
    }
  }

  remove(data) {
    this.rootTree = removeFromTree(this.rootTree, data);
    function removeFromTree(node, data) {
      if (!node) {
        return false;
      }

      if (node.data < data) {
        node.right = removeFromTree(node.right, data);
      } else {
        node.left = removeFromTree(node.left, data);
      }

      if (node.data === data) {
        if (!node.right && !node.left) {
          return (node = null);
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        let nodeLeft = node.left;
        while (nodeLeft.right) {
          nodeLeft = nodeLeft.right;
        }
        node.data = nodeLeft.data;
        node.left = removeFromTree(node.left, nodeLeft.right);
      }
      return node;
    }
  }

  min() {
    let node = this.rootTree;
    let minValue = node.data;
    if (!node) {
      return false;
    }
    if (!node.left) {
      return minValue;
    }
    while (node.left) {
      node = node.left;
    }
    minValue = node.data;
    return minValue;
  }

  max() {
    let node = this.rootTree;
    let maxValue = node.data;
    if (!node) {
      return false;
    }
    if (!node.right) {
      return maxValue;
    }
    while (node.right) {
      node = node.right;
    }
    maxValue = node.data;
    return maxValue;
  }
}

module.exports = {
  BinarySearchTree,
};
