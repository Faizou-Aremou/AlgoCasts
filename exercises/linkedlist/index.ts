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
    }
    this.head = new Node(data, null);
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

  clear(){
    this.head = null;
  }

  removeFirst(){
    this.head = this.removedFirstLinkedList(this.head)
  }
  removeLast(){
    this.head = this.removedLastLinkedList(this.head)
  }

  /**
   *  removedLastLinkedList(null) = null
   *  removedLastLinkedList(isTail(node)) = null
   *  removedLastLinkedList(node) =  soit node removedLast(node) 
   *                                       node 
   * @param head 
   */
  private removedLastLinkedList(node: Node<unknown, unknown> | null) {
    if(node === null || this.isTail(node)){
      return null
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
  private removedLast(node: Node<unknown, unknown>):Node<unknown, unknown> {
    if(this.isTail(node.next as Node<unknown, unknown>)){
      node.next = null;
      return node
    } 
    const result = (rNode:Node<unknown, unknown>) => {
      node.next = rNode
      return node;
    }
    return result(this.removedLast(node.next as Node<unknown, unknown>));
  }

  /**
   * removeFirstLinkedList(null) = null
   * removeFirstLinkedList(isTail(node)) = null
   * removeFirstLinkedList(node) = node.next
   * @param head 
   */
  private removedFirstLinkedList(node: Node<unknown, unknown> | null) {
    if(node === null || this.isTail(node)){
      return node
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
    return this.getLinkedListLast(node.next)
  }
  /**
   * linkedListSize(null) = 0
   * linkedListSize(isTail(node)) = 1
   * linkedListSize(node) = 1 + linkedListSize(node.next)
   * @param node
   */
  private linkedListSize(node: Node<unknown, unknown> | null): number {
    if (node === null) {
      return 0;
    } else if (this.isTail(node)) {
      return 1;
    }
    return 1 + this.linkedListSize(node.next);
  }
  private isTail(node: Node<unknown, unknown>): boolean {
    return node.next === null;
  }
}
