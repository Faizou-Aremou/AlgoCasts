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
  const first = list.head?.next ?? null;
  return first !== null && isCircular(first.next, first);
}
/**
 * isCircular(null, jalon) = false;
 * isCircular(node, jalon) = node === jalon || isCircular(node.next, jalon)
 */
export function isCircular(node: Node, jalon: Node = node.next): boolean {
  return node === jalon || (node.next !== null && isCircular(node.next, jalon));
}
