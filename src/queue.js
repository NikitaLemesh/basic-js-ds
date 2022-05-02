const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
  }

  remove() {
    const deletedElem = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedElem;
  }

  getQueue() {
    for (let key in this) {
      if (key === "head") {
        return this[key];
      }
    }
    return this;
  }
}

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  getUnderlyingList() {
    return this.linkedList.getQueue();
  }

  enqueue(value) {
    this.linkedList.add(value);
  }

  dequeue() {
    const severedHead = this.linkedList.remove();
    return severedHead.value;
  }
}

module.exports = {
  Queue,
};
