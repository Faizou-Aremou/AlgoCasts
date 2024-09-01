// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

export class Node<T> {
  children: Array<Node<T>>;
  constructor(public data: T) {
    this.children = [];
  }
  add(data: T): void {
    this.children = [...this.children, new Node(data)];
  }
  remove(data: T) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

export class Tree<T = any> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  traverseDF(fn: (d: Node<T>) => void): void {
    this.traverseDFR(fn, this.root);
  }

  /**
   * traverseDFR(fn, null) = void
   * traverseDFR(fn, node) = fn(node) && traverseDFRForest(fn, node.children)
   * traverseDFRForest(fn, []) = void
   * traverseDFRForest(fn, nodes) = fn(first(nodes)) && traverseDFRForest(first(nodes).children) && traverseDFRForest(tail(nodes))
   * @param fn
   * @param root
   */
  private traverseDFR(fn: (d: Node<T>) => void, node: Node<T> | null) {
    if (node !== null) {
      fn(node);
      this.traverseDFRForest(fn, node.children);
    }
  }
  private traverseDFRForest(fn: (d: Node<T>) => void, children: Node<T>[]) {
    if (children.length !== 0) {
      fn(children[0]);
      this.traverseDFRForest(fn, children[0].children);
      this.traverseDFRForest(fn, children.splice(1));
    }
  }

  traverseBF(fn: (d: Node<T>) => void): void {
    this.traverseBFR(fn, this.root);
  }
  /**
   * traverseBFR(fn, null) = void
   * traverseBFR(fn, node) = fn(node) && traverseBFForestR(node.children)
   * traverseBFForestR(fn, []) = void
   * traverseBFForestR(fn, nodes) = fn(nodes) && recupererChildren(nodes) traverseBFForestR(recu^p)
   * @param fn
   * @param node
   */
  private traverseBFR(fn: (d: Node<T>) => void, node: Node<T> | null) {
    if (node !== null) {
      fn(node);
      this.traverseBFRChildren(fn, node.children);
    }
  }

  private traverseBFRChildren(fn: (d: Node<T>) => void, nodes: Node<T>[]) {
    if (nodes.length !== 0) {
      nodes.forEach((node) => {
        fn(node);
      });
      const children = nodes.flatMap((node) => node.children);
      this.traverseBFRChildren(fn, children);
    }
  }
}
