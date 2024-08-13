class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currNode = this.head;

    // 원하는 요소가 존재하지 않는 경우
    while (currNode.value !== value) {
      /// 다음 노드 이동
      currNode = currNode.next;
    }

    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    // 첫번째 노드일때
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 다른 포인터가 존재할때
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;

      // Tail이 Head로 연결
      this.tail.next = this.head;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);

    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;

    // 값을 찾지 못한다면 다음 포인터 이동
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    // 다음 포인터가 존재하는 경우
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    const originalValue = this.head;
    let currNode = this.head;
    let displayString = '[';

    // 다음 포인터가 존재하지 않을 때까지 순회
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      // 다음 포인터 이동
      currNode = currNode.next;

      if (currNode === originalValue) break;
    }

    displayString = displayString.substr(0, displayString.length - 2);
    displayString += ']';

    console.log(displayString);
  }

  size() {
    let currentNode = this.head;
    let count = 0;

    while (currentNode !== null) {
      count += 1;

      currentNode = currentNode.next;
    }

    return count;
  }
}

const linkedList = new CircularLinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log(linkedList);
linkedList.display();

// console.log(linkedList.find(1));
