// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

export class Node<T = unknown, U = unknown> {
  private _data: T;
  private _next: Node<U> | null = null;
  get data() {
    return this._data;
  }
  get next() {
    return this._next;
  }
  set data(data: T) {
    this._data = data;
  }
  set next(next: Node<U> | null) {
    this._next = next;
  }
  constructor(data: T, next: Node<U> | null = null) {
    this._data = data;
    this._next = next;
  }
}

export class LinkedList {
  head: Node | null = null;
  insertFirst(data: unknown): void {
    if (this.head !== null) {
      this.head = new Node(data, this.head);
    } else {
      this.head = new Node(data, null);
    }
  }
  size(): number {
    return this.linkedListSize(this.head);
  }

  getFirst(): Node | null {
    return this.head;
  }
  getLast(): Node | null {
    return this.getLinkedListLast(this.head);
  }

  clear(): void {
    this.head = null;
  }

  removeFirst(): void {
    this.head = this.removedFirstLinkedList(this.head);
  }
  removeLast(): void {
    this.head = this.removedLastLinkedList(this.head);
  }

  insertLast(data: unknown): void {
    const node = new Node(data);
    const lastNode = this.getLast();
    if (lastNode !== null) {
      lastNode.next = node;
    } else {
      this.head = node;
    }
  }
  getAt(index: number): Node | null {
    return this.getAtLinkedList(index, this.head);
  }
  removeAt(index: number): void {
    this.head = this.removeAtLinkedList(index, this.head);
  }
  insertAt(data: unknown, index: number): void {
    this.head = this.insertAtLinkedList(data, index, this.head);
  }

  /**
   * insertAtLinkedList(data,0,node)= Node(data).next = node
   * insertAtLinkedList(data,n,null)= Node(data)
   * insertAtLinkedList(data,n,node)= soit rNode =  insertAtLinkedList(data,n-1,node.next)
   *                                      dans Node.next = rNode
   *                                              node
   * @param index
   * @param node
   */
  private insertAtLinkedList(
    data: unknown,
    index: number,
    node: Node<unknown, unknown> | null
  ): Node<unknown, unknown> | null {
    if (node === null) {
      return new Node(data);
    }
    if (index === 0) {
      new Node(data).next = node;
    }
    const concatNode = (restNode: Node | null) => {
      node.next = restNode;
      return node;
    };
    return concatNode(this.insertAtLinkedList(data, index - 1, node.next));
  }
  /**
   * removeAtLinkedList(0, node) = node.next
   * removeAtLinkedList(n, null) = null
   * removeAtLinkedList(n + 1, node) =  soit restNode = removeAtLinkedList(n, node.next)
   *                                        dans node.next = restNode
   *                                              node
   * @param index
   * @param node
   */
  private removeAtLinkedList(
    index: number,
    node: Node<unknown, unknown> | null
  ): Node<unknown, unknown> | null {
    if (node === null) {
      return node;
    } else if (index === 0) {
      return node.next;
    }
    const concatNode = (restNode: Node | null) => {
      node.next = restNode;
      return node;
    };
    return concatNode(this.removeAtLinkedList(index - 1, node.next));
  }

  /**
   * getAtLinkedList(0, node)= node
   * getAtLinkedList(n, null)= null
   * getAtLinkedList(n+1, node)= getAtLinkedList(n, node.next)
   * @param index
   * @param number
   */
  private getAtLinkedList(
    index: number,
    node: Node<unknown, unknown> | null
  ): Node<unknown, unknown> | null {
    if (index === 0) {
      return node;
    }
    if (node === null) {
      return null;
    }
    return this.getAtLinkedList(index - 1, node.next);
  }
  /**
   *  removedLastLinkedList(null) = null
   *  removedLastLinkedList(isTail(node)) = null
   *  removedLastLinkedList(node) =  soit node removedLast(node)
   *                                       node
   * @param head
   */
  private removedLastLinkedList(node: Node<unknown, unknown> | null) {
    if (node === null || this.isTail(node)) {
      return null;
    }
    return this.removedLast(node);
  }
  /**
   * removedLast(isTail(node.next)) = node
   * removedLast(node) = soit Rnode = removedLast(node.next)
   *                      dans node.next = Rnode;
   * @param node
   * @returns
   */
  private removedLast(node: Node<unknown, unknown>): Node<unknown, unknown> {
    if (this.isTail(node.next as Node<unknown, unknown>)) {
      node.next = null;
      return node;
    }
    const result = (rNode: Node<unknown, unknown>) => {
      node.next = rNode;
      return node;
    };
    return result(this.removedLast(node.next as Node<unknown, unknown>));
  }

  /**
   * removeFirstLinkedList(null) = null
   * removeFirstLinkedList(isTail(node)) = null
   * removeFirstLinkedList(node) = node.next
   * @param head
   */
  private removedFirstLinkedList(node: Node<unknown, unknown> | null) {
    if (node === null || this.isTail(node)) {
      return node;
    }
    return node.next;
  }
  /**
   * getLinkedListLast(isTail(node)) = node
   * getLinkedListLast(node) =  getLinkedListLast(node.next)
   * @returns
   */
  private getLinkedListLast(
    node: Node<unknown, unknown> | null
  ): Node<unknown, unknown> | null {
    if (node === null || this.isTail(node)) {
      return node;
    }
    return this.getLinkedListLast(node.next);
  }
  /**
   * linkedListSize(null) = 0
   * linkedListSize(isTail(node)) = 1
   * linkedListSize(node) = 1 + con linkedListSize(node.next)
   * @param node
   */
  private linkedListSize(node: Node<unknown, unknown> | null): number {
    if (node === null) {
      return 0;
    } else if (this.isTail(node)) {
      return 1;
    }
    const add = (size: number) => {
      return 1 + size;
    };
    return add(this.linkedListSize(node.next));
  }
  private isTail(node: Node<unknown, unknown>): boolean {
    return node.next === null;
  }
}
