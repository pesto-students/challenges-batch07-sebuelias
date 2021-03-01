import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new LinkListNode(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    const newNode = new LinkListNode(value);
    if (this.head) {
      let node = this.head;
      while (node) {
        if (node.next === null) {
          node.next = newNode;
          return;
        }
        node = node.next;
      }
    }
    this.head = newNode;
  }

  delete(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }
    let prevNode = null;
    let currentNode = this.head;
    while (currentNode) {
      if (value === currentNode.value) {
        prevNode.next = currentNode.next;
        return true;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    return false;
  }

  traverse() {
    let node = this.head;
    while (node) {
      node = node.next;
    }
  }

  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  length() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter += 1;
      node = node.next;
    }
    return counter;
  }
}
