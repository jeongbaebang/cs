class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;

    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(5);

console.log(queue.dequeue());

queue.enqueue(6);

console.log(queue.size());
console.log(queue.peek());

// Linked List로 구현된 Queue 구현체
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;

    return value;
  }

  peek() {
    return this.head.value;
  }
}

// Circular Queue
// front나 rear가 크기를 벗어날경우 0번 인덱스로 처리
class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log('Queue is full.');

      return;
    }

    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }

  // 가장 먼저 들어갔던 데이터 빼기
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;

    return value;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  peek() {
    return this.queue[this.front];
  }
}
