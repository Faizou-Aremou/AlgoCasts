// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

import { init, isEmpty, last, prepend, tail } from 'ramda';

export function reverse(str: string): string {
  return str.split('').reverse().join('');
}


// /**
//  *
//  * reverse '' = ''
//  * reverse S*e2 = e2°reverse S
//  */
// export function reverse(str: string): string {
//   return reverseStringList(str.split('')).join('');
// }
// export function reverseStringList(str: string[]): string[] {
//   if (isEmpty(str)) {
//     return [];
//   } else {
//     return prepend(last(str), reverseStringList(init(str))) as string[];
//   }
// }
