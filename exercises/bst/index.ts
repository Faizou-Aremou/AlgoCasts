// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

export class Node<T> {
  right: Node<T> | null;
  left: Node<T> | null;
  constructor(public data: T) {
    this.right = null;
    this.left = null;
  }
  /**
   * insert(data) =  this.data <= data ? insert(data, this.right) : insert(data, this.left);
   * @param data
   */
  insert(data: T): void {
    if (this.sup(data, this.data)) {
      if (this.right === null) {
        this.right = this.insertR(data, new Node(data));
      } else {
        this.right = this.insertR(data, this.right);
      }
    } else if(this.inf(data, this.data)) {
      if (this.left === null) {
        this.left = this.insertR(data, new Node(data));
      } else {
        this.left = this.insertR(data, this.left);
      }
    }
  }


  contains(data: T): Node<T> | null {
    if (this.equal(data, this.data)) {
      return this;
    }
    return this.containsR(data, this.left) || this.containsR(data, this.right);
  }
  private containsR(data: T, node: Node<T> | null): Node<T> | null {
    if (node === null) {
      return null;
    }

    if (this.equal(data, node.data)) {
      return node;
    }
    const r = this.containsR(data, node.left);
    return r === null ? this.containsR(data, node.right) : r;
  }
  private equal(data: T, data1: T): boolean {
    return data === data1;
  }
  /**
   * insertR(data, null) = new Node(data)
   * insertR(data, node) = data < node.data alors  node.right = insertR(data, node.right) sinon node.left = insertR(data, node.left)
   * @param data
   * @param node
   */
  private insertR(data: T, node: Node<T> | null): Node<T> {
    if (node === null) {
      return new Node(data);
    }

    if (this.sup(data, node.data)) {
      node.right = this.insertR(data, node.right);
      return node;
    } 
    if (this.inf(data, node.data)) {
      node.left = this.insertR(data, node.left);
      return node;
    } 
    node.right = null;
    node.left = null;
    return node
  }

  private inf(data: T, data1: T): boolean {
    return data < data1;
  }
  private sup(data1: T, data2: T): boolean {
    return data1 > data2;
  }
}
