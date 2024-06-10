// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

export function steps(n: number): void {
  const steps = stepsToPrints(n).split('\n').filter((step)=> step!=='');
  steps.forEach((step)=> console.log(step));
}

function stepsToPrints(n: number): string {
  if (n === 0) {
    return '';
  }
  return stepsToPrintsWithSpace(n, n);
}

function stepsToPrintsWithSpace(n: number, baseN: number): string {
  if (n === 0) {
    return '';
  }
  const getSteps = (steps: string): string =>
    steps + '\n' + sharpFromNumber(n) + spaceFromNumber(baseN - n);
  return getSteps(stepsToPrintsWithSpace(n - 1, baseN));
}
function sharpFromNumber(n: number): string {
  if (n === 0) {
    return '';
  }
  return '#' + sharpFromNumber(n - 1);
}

function spaceFromNumber(n:number):string{
  if (n === 0) {
    return '';
  }
  return ' ' + spaceFromNumber(n - 1);
}