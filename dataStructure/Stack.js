const stack = [];

stack.push(1);
stack.push(2);

console.log(stack.pop()); // 2

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;

    return value;
  }

  list() {
    return this.size;
  }
}

const linkedListStack = new Stack();

linkedListStack.push(1);
linkedListStack.push(2);
linkedListStack.push(3);

console.log(linkedListStack);

console.log(linkedListStack.pop());

console.log(linkedListStack.list());
