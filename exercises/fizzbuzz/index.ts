// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

/**
 *
 * fizzBuzz(1)= void;
 * fizzBuzz(n+1) = if n+1%3=0 ? 'fizz'
 *                 if n+1%5=0 ? 'buzz'
 *                   fizzBuzz(n)
 */
export function fizzBuzz(n: number): void {
  const list = fizzBuzzList(n);
  list.forEach((item) => {
    console.log(item);
  });
}
export function fizzBuzzList(n: number): (string| number)[] {
  if (n < 1) {
    return [];
  }
  if (n % 3 === 0 && n % 5 === 0) {
    return [...fizzBuzzList(n - 1), 'fizzbuzz'];
  } else if (n % 3 === 0) {
    return [...fizzBuzzList(n - 1), 'fizz'];
  } else if (n % 5 === 0) {
    return [...fizzBuzzList(n - 1), 'buzz'];
  }
  return [...fizzBuzzList(n - 1), n];
}
