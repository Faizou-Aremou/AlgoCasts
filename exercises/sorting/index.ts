// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

import { head, isEmpty, prepend, tail } from 'ramda';
function isInf<T>(element1: T, element2: T): boolean {
  return element1 <= element2;
}
/**
 * insertionSort:: [T], fn -> [T]
 */

export function insertionSort<T>(
  isSup: (element1: T, element2: T) => boolean,
  list: T[]
): T[] {
  return isEmpty(list)
    ? []
    : insertion<T>(isSup, insertionSort(isSup, tail(list)), head(list) as T);
}
/**
 *insertion:: [T], T, fn -> [T]
 */
export function insertion<T>(
  isSup: (element1: T, element2: T) => boolean,
  list: T[],
  element: T
): T[] {
  switch (list.length) {
    case 0:
      return [element];
    default:
      return isSup(head(list) as T, element)
        ? [element, head(list) as T, ...tail(list)]
        : [head(list) as T, ...insertion(isSup, tail(list), element)];
  }
}
export function bubbleSort<T>(arr: T[]): T[] {
  return [];
}

export function selectionSort<T>(arr: T[]): T[] {
  return [];
}

/**
 * tri fusion ou tri par interclassement en francais
 * utilisé dans JavaScript Array.sort
 * @param sequence
 * @returns
 */
export function mergeSort<T>(
  sortFn: (left: T, right: T) => boolean = isInf,
  sequence: T[]
): T[] {
  switch (sequence.length) {
    case 0:
      return [];
    case 1:
      return [...sequence];
    default: {
      const [sequence1, sequence2] = slipInTwoPart(sequence);
      return merge(
        sortFn,
        mergeSort(sortFn, sequence1),
        mergeSort(sortFn, sequence2)
      );
    }
  }
}

export function merge<T>(
  sortFn: (left: T, right: T) => boolean = isInf,
  left: any,
  right: any
):T[] {
  if (left.length === 0 && right.length === 0) {
    return [];
  }
  if (left.length === 1 && right.length === 0) {
    return [...left];
  }
  if (left.length === 0 && right.length === 1) {
    return [...right];
  }
  if (left.length === 1 && right.length === 1) {
    return sortFn(left[0], right[0])
      ? [...left, ...right]
      : [...right, ...left];
  }

  return (head(left) as T) <= (head(right) as T)
    ? prepend(head(left) as T, merge(sortFn, tail(left), right))
    : prepend(head(right) as T, merge(sortFn, left, tail(right)));
}

function slipInTwoPart<T>(sequence: T[]): [T[], T[]] {
  const { sequencePart1, sequencePart2, halfOfSequenceSize, sequenceSize } =
    embelishSlipInTwo(sequence);
  return [sequencePart1, sequencePart2];
}


export function embelishSlipInTwo<T>(sequence: T[]): {
  sequencePart1: T[];
  sequencePart2: T[];
  halfOfSequenceSize: number;
  sequenceSize: number;
} {
  switch (sequence.length) {
    case 0:
      return {
        sequencePart1: [],
        sequencePart2: [],
        halfOfSequenceSize: 0,
        sequenceSize: 0,
      };
    case 1:
      return {
        sequencePart1: [],
        sequencePart2: [sequence[0]],
        halfOfSequenceSize: 0,
        sequenceSize: 1,
      };
    case 2:
      return {
        sequencePart1: [sequence[0]],
        sequencePart2: [sequence[1]],
        halfOfSequenceSize: 1,
        sequenceSize: 2,
      };
    default: {
      const { sequencePart1, sequencePart2, halfOfSequenceSize, sequenceSize } =
        embelishSlipInTwo(tail(sequence));
      if ((sequenceSize + 1) % 2 === 0) {
        return {
          sequencePart1: prepend(head(sequence) as T, sequencePart1),
          sequencePart2: sequencePart2,
          halfOfSequenceSize: (sequenceSize + 1) / 2,
          sequenceSize: sequenceSize + 1,
        };
      } else {
        return {
          sequencePart1,
          sequencePart2: prepend(head(sequence) as T, sequencePart2),
          halfOfSequenceSize: sequenceSize / 2,
          sequenceSize: sequenceSize + 1,
        };
      }
    }
  }
}
