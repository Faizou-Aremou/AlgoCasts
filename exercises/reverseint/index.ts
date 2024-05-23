// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

export function reverseInt(numb: number): number {
  const numSign = Math.sign(numb);
  const reversedNumb = numSign * parseInt(numb.toString().split('').reverse().join(''), 10);
  return reversedNumb;
}
