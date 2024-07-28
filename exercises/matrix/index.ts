// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
// matrix(5)
// [
//   [1, 2, 3, 4, 5],
//   [16, 17, 18, 19, 6], // recursive + 1 vers l'avant dernier, recursive + 1 vers le bas jusqu'à l'avant derniere ligne,
//   [15, 24, 25, 20, 7],
//   [14, 23, 22, 21, 8], //
//   [13, 12, 11, 10, 9],
// ];

/**
 * spiral doesn't seems to work with recursive. Matrix is Array, recursion works better with list
 * @param n
 * @returns
 */
export function matrix(n: number): number[][] {
  const result: (null| number)[][] = createEmptySquareMatrix(n);
  let numberToInsert = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startColumn <= endColumn && startRow <= endRow){
    for(let i=startColumn; i<=endColumn; i++){
      result[startRow][i]= numberToInsert;
      numberToInsert++
    }
    startRow++
    for(let i=startRow; i<=endRow; i++){
      result[i][endColumn]= numberToInsert;
      numberToInsert++
    }
    endColumn--
    for(let i=endColumn; i>=startColumn; i--){
      result[endRow][i]= numberToInsert;
      numberToInsert++
    }
    endRow--
    for(let i=endRow; i>=startRow; i--){
      result[i][startColumn]= numberToInsert;
      numberToInsert++
    }
    startColumn++
  }
  return result as number[][]
}

/**
 * emptySquareMatrix(t,0) = []
 * emptySquareMatrix(t,n+1) = emptyElementArray(t)° emptySquareMatrix(n)
 * @param n
 */
function createEmptySquareMatrix(nbElements:number): null[][] {
  
  return createEmptyMatrix(nbElements, nbElements);
}
function createEmptyMatrix(nbColumns: number, nbRows: number): null[][] {
  if (nbRows === 0) {
    return [];
  }
  return [emptyElementArray(nbColumns), ...createEmptyMatrix(nbColumns, nbRows - 1)];
}

function emptyElementArray(nbColumns: number): null[] {
  if (nbColumns === 0) {
    return [];
  }
  return [null, ...emptyElementArray(nbColumns - 1)];
}
