// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
import { head, isEmpty, prepend, tail } from 'ramda';

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
/**
 * implémentation naif de bubble sort, normalement, la fonction de comparaison doit être fourni à la fonction en paramètres
 *
 * bubbleSort([]) = []
 * bubbleSort([e]) = [e]
 * bubbleSort([]) = []
 * bubbleSort(e1°e2°S) = soit S°e = bubbleComp(e1°e2°S)
 *                      dans bubbleSort(S)°e
 * bubbleCom(e1°e2°S) = soit [t1, t2] = sorted(e1,e2)
 *                         dans [t1, bubbleSort(t2°S)]
 * @param arr
 * @returns
 */
export function bubbleSort<T>(arr: T[]): T[] {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  const soitDans = (list: T[]) => {
    return [...bubbleSort([...list.slice(0, -1)]), ...list.slice(-1)];
  };
  return soitDans(bubbleComp<T>(arr));
}
function bubbleComp<T>(arr: T[]): T[] {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  const soitDans = ([el1, el2]: [T, T]) => {
    return [el1, ...bubbleComp([el2, ...arr.slice(2)])];
  };
  return soitDans(sort(arr.slice(0, 2) as [T, T]));
}

/**
 * Selection Sort en francais tri par recherche du maximun
 * selectionSort([]) = []
 * selectionSort(e°S) = soit <max,rest> = Max(e°S)
 *                              dans   selectionSort(S°e)°max
 * Max([e1,e2]) = e1 > e2 alors <e1,[e2]> sinon <e2,[e1]>
 * Max([e1]) = <e1,[]>
 * Max(e°S) = soit <max, rest> = Max(S);
 *                 e > max alors <e, rest°max> sinon <max, rest°e>
 *
 * @param arr
 * @returns
 */
export function selectionSort<T>(arr: T[]): T[] {
  if (arr.length === 0) {
    return [];
  }
  const result = ([max, rest]: [T, T[]]) => {
    return [...selectionSort(rest), max];
  };
  return result(max(arr));
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
): T[] {
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
        embelishSlipInTwo<T>(tail(sequence));
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

function isInf<T>(element1: T, element2: T): boolean {
  return element1 <= element2;
}
function max<T>(arr: T[]): [T, T[]] {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[0], [arr[1]]] : [arr[1], [arr[0]]];
  }
  if (arr.length === 1) {
    return [arr[0], []];
  }
  const result = ([max, rest]: [T, T[]]): [T, T[]] => {
    return arr[0] > max ? [arr[0], [...rest, max]] : [max, [...rest, arr[0]]];
  };
  return result(max(arr.slice(1)));
}
function slipInTwoPart<T>(sequence: T[]): [T[], T[]] {
  const { sequencePart1, sequencePart2, halfOfSequenceSize, sequenceSize } =
    embelishSlipInTwo(sequence);
  return [sequencePart1, sequencePart2];
}

/**
 * naive implementation de sort
 * @param param0
 */
function sort<T>([e1, e2]: [T, T]): [T, T] {
  return e1 > e2 ? [e2, e1] : [e1, e2];
}
