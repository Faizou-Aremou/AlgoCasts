import {
  bubbleSort,
  insertionSort,
  merge,
  mergeSort,
  mergeSortInArray,
  POitc,
  quickSortInArray,
  selectionSort,
} from './index';
function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}
export function isSupNumber<T>(element1: T, element2: T): boolean {
  return element1 >= element2;
}

const numberList = [12, 13, 20, 8, 3, 4, 0, 5, 3];
describe('Insertion Sort', () => {
  test('insertionSort', () => {
    expect(insertionSort(isSupNumber, numberList)).toEqual([
      0, 3, 3, 4, 5, 8, 12, 13, 20,
    ]);
  });
});
describe('Bubble sort', () => {
  test('sorts an array', () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Selection sort', () => {
  test('sorts an array', () => {
    expect(selectionSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Merge sort', () => {
  test('merge function can join together two sorted arrays', () => {
    const left = [1, 10];
    const right = [2, 8, 12];

    expect(merge(left, right)).toEqual([1, 2, 8, 10, 12]);
  });

  test('sorts an array', () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });
  test('sorts an array using POitc function', () => {
    expect(POitc(getArray())).toEqual(getSortedArray());
  });
  test('Merge Sort using actionnal way in Array', () => {
    const array = [...getArray()];
    mergeSortInArray(array);
    expect(array).toEqual(getSortedArray());
  });
});
describe('Quick sort', () => {
  test('Quick sort', () => {
    const array = getArray();
    quickSortInArray(array, [0, array.length - 1]);
    expect(array).toEqual(getSortedArray());
  });
});
