// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

import { LinkedList, Node } from './linkedlist';

export function circular(list: LinkedList) {
  const fast: any = list.head?.next?.next ?? null;
  const slow: any = list.head?.next ?? null;
  return isCircular(slow, fast);
}
/**
 * isCircular(null, jalon) = false;
 * isCircular(node, jalon)= const fast = node.next.next et fast === node.next  isCircular(node)
 */
export function isCircular(node: Node, fastNode: Node): boolean {
  const fast: any = fastNode?.next?.next ?? null;
  const slow: any = node?.next ?? null;
  if (node === null && fastNode === null) {
    return false;
  }
  return node === fastNode || isCircular(slow, fast);
}
