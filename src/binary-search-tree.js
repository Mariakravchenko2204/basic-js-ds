const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(value) {
    if (value) {
      this.treeRoot = new Node(value);
    } else {
      this.treeRoot = null;
    }
  }

  root() {
    return this.treeRoot;
  }

  add(data, current = this.treeRoot) {
    if (this.treeRoot === null) {
      this.treeRoot = new Node(data);
    } else {
      if (data < current.data) {
        if (!current.left) {
          current.left = new Node(data);
        } else {
          this.add(data, current.left);
        }
      } else if (data > current.data) {
        if (!current.right) {
          current.right = new Node(data);
        } else {
          this.add(data, current.right);
        }
      }
    }
  }

  has(data) {
    let current = this.treeRoot;
    while (current) {
      if (data === current.data) return true;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(data) {
    let current = this.treeRoot;
    while (current) {
      if (data === current.data) return current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(data) {
    console.log("value to remove", data)
    let isRight = false;
    //find value
    let current = this.treeRoot;
    let prev = null;
    while (current) {
      if (data === current.data) break;
      if (data < current.data) {
        prev = current;
        current = current.left;
      } else {
        prev = current;
        current = current.right;
        isRight = true;
      }
    }

    console.log("item to remove", current);
    console.log("previous item", prev)

    if (!current.left){
      if(isRight){
        prev.right = current.right;
      }else {
        prev.left = current.right;
      }
    }
    if (!current.right){
      if(isRight){
        prev.right = current.left;
      }else {
        prev.left = current.left;
      }
    }

    if (!current.left && !current.right){
      if(isRight){
        prev.right = null;
      }else {
        prev.left = null;
      }
    }

    if(current.left && current.right){
      console.log("ELEMENT has both children");
      
      let rightChild = current.right;
      let prev = null;
      while (rightChild.left) {
        prev = rightChild;
        rightChild = rightChild.left;
      }

      console.log("min child from the right", rightChild);
      current.data = rightChild.data;
      rightChild.right = rightChild.right;

    }

    console.log("after deletion", isRight, current)

    


    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    let current = this.treeRoot;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.treeRoot;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
