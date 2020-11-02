// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let length = 0;
    let node = this.head;
    while (node) {
      length++;
      node = node.next;
    }
    return length;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    this.getLast() ? (this.getLast().next = new Node(data)) : (this.head = new Node(data));
  }

  getAt(index) {
    if (index > this.size() || !this.head) return null;

    let node = this.head;

    let counter = 0;

    while (index !== counter) {
      node = node.next;
      counter++;
    }

    return node;
  }

  removeAt(index) {
    if (this.size() <= 0) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    this.getAt(index - 1).next = this.getAt(index + 1);
  }

  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    if (index === this.size()) {
      this.insertLast(data);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
