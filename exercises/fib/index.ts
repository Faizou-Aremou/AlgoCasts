// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/**
 *
 * fib(0)=0
 * fib(1)=1
 * fib(n+1)= fib(n) +fib(n-1)
 */
// export function fib(n: number): number {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

export function fib(n: number): number {
  return (([currValue]) => currValue)(optFib(n));
}
/**
 * optFib(0)=<fib(0),fib(1)>; calcul la valeur du nombre courant et la valeur du nombre suivant
 * optFib(n+1)=soit <x,y>= optFib(n) dans <y, x+y>;
 */
function optFib(n: number): [number, number] {
  if (n === 0) {
    return [0, 1];
  }
  return (([currValue, prevValue]) => [prevValue, currValue + prevValue])(
    optFib(n - 1)
  );
}
/**
 * 0
 */
