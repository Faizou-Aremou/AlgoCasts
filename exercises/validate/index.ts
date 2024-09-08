// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

import { Node } from './node';

/**
 * validate(/r\) = true
 * validate(/G,r,D\) = const <LG, RD> = data()
 *                (inf(dG, r) && sup(dD, r)) &&  validate(G) && validate(D)
 * @param node
 */
export function validate(node: Node, min= null, max=null): boolean {
  if (node === null) { 
    return true; 
  } 
  if (node.left === null && node.right === null) {
    return true;
  }
  return (  
    (min !== null && node.left? node.left?.data > min : true) &&
    (max !== null &&  node.right? node.right?.data < max : true) && 
    (node.left === null || inf(node.left?.data, node.data)) &&
    (node.right === null || sup(node.right?.data, node.data)) &&
    validate(node.left, null, node.data) &&
    validate(node.right, node.left?.data??null, null)  
  );
}

export function inf(data1: any, data2: any): boolean {
  return data1 < data2;
}
export function sup(data1: any, data2: any): boolean {
  return data1 > data2;
}
