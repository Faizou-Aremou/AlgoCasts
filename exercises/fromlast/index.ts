// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

import { LinkedList, Node } from './linkedlist';

export function fromLast(list: LinkedList, n: number) {
  return fromLastNode(list.head, n);
}

/**
 *
 * fromLastNode(null, n) = null
 * fromLastNode(node, 0) = node
 * fromLastNode(node, n) = soit r = isNode(node, n) retoure n alors R;
 * isNode(node,0) = node.next === null alors true;
 * isNode(null,0) = false
 * isNode(node, n) = isNode(node.next, n-1)
 *
 * @param node
 * @param n
 * @returns
 */
function fromLastNode(node: Node, n: number): Node | null {
  if (node === null) {
    return null;
  }
  if (n === 0) {
    return node;
  }
  const soitDans = (isNode: boolean): Node | null => {
    return isNode ? node : fromLastNode(node.next, n);
  };

  return soitDans(isNode(node, n));
}

function isNode(node: Node, n: number): boolean {
  if (node === null) {
    return false;
  }
  if(n===0) {
    return node.next === null;
  }
  return isNode(node.next, n-1)
}
