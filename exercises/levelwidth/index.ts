// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

import { Node } from './node';
/**
 * levelWidth(null)= []
 * levelWidth(/u\)= [1]
 * levelWidth(node)= [1] ° levelWidthF(node.children)
 * levelWidthF([]) = []
 * levelWidthF(nodes) = size(nodes)° levelWidthF(recupererChildren(nodes))
 * @param root
 */
export function levelWidth(root: Node): number[] {
  if (root == null) {
    return [];
  }
  if (root.children.length === 0) {
    return [1];
  }
  return [1, ...levelWidthF(root.children)];
}
function levelWidthF(nodes: Node[]): number[] {
  if (nodes.length === 0) {
    return [];
  }
  return [nodes.length, ...levelWidthF(nodes.flatMap((node) => node.children))];
}
