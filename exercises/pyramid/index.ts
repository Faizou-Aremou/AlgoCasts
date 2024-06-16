// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

export function pyramid(n: number): void {
  const steps = pyramidToPrints(n)
    .split('\n')
    .filter((step) => step !== '');
  steps.forEach((step) => console.log(step));
}

function pyramidToPrints(n: number): string {
  if (n === 0) {
    return '';
  }
  if (n === 1) {
    return '#';
  }
  const baseN = getCorrespondingBase(n);
  return pyramidToPrintsWithSpace(n, getCorrespondingBase(n), baseN);
}

function pyramidToPrintsWithSpace(
  n: number,
  nSharp: number,
  baseN: number
): string {
  if (n === 1) {
    const space = (baseN - n) / 2;
    return spaceFromNumber(space) + sharpFromNumber(n) + spaceFromNumber(space);
  }
  const getSteps = (steps: string): string => {
    const totalSpace = baseN - nSharp;
    const space = totalSpace / 2;
    return (
      steps +
      '\n' +
      spaceFromNumber(space) +
      sharpFromNumber(nSharp) +
      spaceFromNumber(space)
    );
  };
  return getSteps(pyramidToPrintsWithSpace(n - 1, getCorrespondingBase(n - 1), baseN));
}
function sharpFromNumber(n: number): string {
  if (n === 0) {
    return '';
  }
  return '#' + sharpFromNumber(n - 1);
}

function spaceFromNumber(n: number): string {
  if (n === 0) {
    return '';
  }
  return ' ' + spaceFromNumber(n - 1);
}
/**
 * getCorrespondingBase(0) = 0
 * getCorrespondingBase(1) = 1
 * getCorrespondingBase(n+1) = 2 + getCorrespondingBase(n)
 */
function getCorrespondingBase(n: number): number {
  if (n === 1) {
    return n;
  }
  return 2 + getCorrespondingBase(n - 1);
}
