// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
import { append, head, init, isEmpty, last, prepend, tail } from 'ramda';

/**
 * insertionSort:: [T], fn -> [T]
 * tri par insertion; Algorithme de tri populaire; Cependant c'est un algorithme de tri très lent; complexité asymptotique est quadratique
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
 * c'est l'un des algo les plus lent, et il n'est donc guère utilisé en pratique
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
 * Selection Sort en francais tri par recherche du maximun:  Cet algorithme est simple, mais considéré comme inefficace car il s'exécute en temps quadratique
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
/**
 * tri fusion ou tri par interclassement en francais; algo très rapide
 * utilisé dans JavaScript Array.sort
 * @param sequence
 * @returns
 */
export function mergeSort<T>(
  sequence: T[],
  sortFn: (left: T, right: T) => boolean = numericLikeIsInf
): T[] {
  switch (sequence.length) {
    case 0:
      return [];
    case 1:
      return [...sequence];
    default: {
      const [sequence1, sequence2] = slipInTwoPart(sequence);
      return merge(
        mergeSort(sequence1, sortFn),
        mergeSort(sequence2, sortFn),
        sortFn
      );
    }
  }
}
function slipInTwoPart<T>(sequence: T[]): [T[], T[]] {
  const { sequencePart1, sequencePart2, halfOfSequenceSize, sequenceSize } =
    embelishSlipInTwo(sequence);
  return [sequencePart1, sequencePart2];
}

export function merge<T>(
  left: T[],
  right: T[],
  sortFn: (left: T, right: T) => boolean = numericLikeIsInf
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
    ? prepend(head(left) as T, merge(tail(left), right, sortFn))
    : prepend(head(right) as T, merge(left, tail(right), sortFn));
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
/**
 * Permutation ordonnée d'une séquence: Tri par interclassement ou par fusion
 * Solution fonctionnelle recursif issue de "11.3 Etude du d'un algorithme de tri recursif", a) solution fonctionnelle, page 256/257.
 */
export function POitc<T>(
  sequence: T[],
  isInf: (left: T, right: T) => boolean = numericLikeIsInf
): T[] {
  if (isEmpty(sequence)) {
    return [];
  }
  if (sequence.length === 1) {
    return sequence;
  }
  const isIn = ([sequence1, sequence2]: [T[], T[]]) => {
    return interClassification(POitc(sequence1), POitc(sequence2), isInf);
  };
  return isIn(bothParts(sequence, isInf));
}
function bothParts<T>(
  sequence: T[],
  isInf: (left: T, right: T) => boolean
): [T[], T[]] {
  switch (sequence.length) {
    case 0:
      return [[], []];
    case 1:
      return [sequence, []];
    default: {
      const isIn = (first: T, middle: T[], last: T): [T[], T[]] => {
        const isIn = ([sequence1, sequence2]: [T[], T[]]): [T[], T[]] => [
          prepend(first, sequence1) as T[],
          [...sequence2, last],
        ];
        return isIn(bothParts(middle, isInf));
      };
      return isIn(
        head(sequence) as T,
        tail(init(sequence)),
        last(sequence) as T
      );
    }
  }
}

function interClassification<T>(
  sequence1: T[],
  sequence2: T[],
  isInf: (left: T, right: T) => boolean
): T[] {
  if (isEmpty(sequence1) || isEmpty(sequence2)) {
    return [...sequence1, ...sequence2];
  }
  const isIn = (last1: T, init1: T[], last2: T, init2: T[]) =>
    isInf(last1, last2)
      ? [...interClassification(sequence1, init2, isInf), last2]
      : [...interClassification(sequence2, init1, isInf), last1];
  return isIn(
    last(sequence1) as T,
    init(sequence1),
    last(sequence2) as T,
    init(sequence2)
  );
}

function numericLikeIsInf<T>(element1: T, element2: T): boolean {
  return element1 <= element2;
}

/**
 * naive implementation de sort
 * @param param0
 */
function sort<T>([e1, e2]: [T, T]): [T, T] {
  return e1 > e2 ? [e2, e1] : [e1, e2];
}

export function mergeSortInArray<T>(array: T[]) {
  let tempArray: T[] = [];
  /**
   * Tri interclassement sur les tableaux
   * Solution actionnelle recursif issue de "11.3 Etude du d'un algorithme de tri recursif", a) page 257/258.
   */
  function TrierLtc([inf, sup]: [number, number]) {
    let m: number;
    if (inf < sup) {
      const somme = inf + sup;
      m = somme % 2 === 0 ? somme / 2 : (somme - 1) / 2;
      TrierLtc([inf, m]);
      TrierLtc([m + 1, sup]);
      interArrayClassification([inf, m], [m + 1, sup]);
    }
  }

  function interArrayClassification(
    [a, b]: [number, number],
    [c, d]: [number, number]
  ): void {
    let i1: number, i2: number;
    let k: number;
    i1 = a;
    i2 = c;
    k = a;
    while (i1 <= b && i2 <= d) {
      if (array[i1] <= array[i2]) {
        tempArray[k] = array[i1];
        i1 += 1;
      } else {
        tempArray[k] = array[i2];
        i2 += 1;
      }
      k += 1;
    }

    for (let i = i1; i <= b; i++) {
      tempArray[k] = array[i];
      k += 1;
    }

    for (let i = i2; i <= d; i++) {
      tempArray[k] = array[i];
      k += 1;
    }
    tempArray.forEach((el, index) => {
      array[index] = el;
    });
  }
}
