// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 * chunk([], n)=[]
 * chunk(e°S, n)=  l = length(e°S);
 *                 l < n ? e°S
 *                       : createChunk(e°S,n)
 *
 * createChunk([],n)= []
 * createChunk(e°S,n)= <sl, T> = group(e°S, n);
 *                    sl°createChunk(T,n)
 *
 * group(e°S, 0)= <[], e°S>
 * group(e°S, n+1) =  <sl, T> = group(S, n)
 *                    <e°sl, T>
 * @param array
 * @param size
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (array.length === 0) {
    return [];
  }
  if (array.length < size) {
    return [array];
  }
  const [chunked, tailList] = groupChunk(array, size);
  return [chunked, ...chunk(tailList, size)];
}

function groupChunk<T>(array: T[], size: number): [T[], T[]] {
  if (size === 0) {
    return [[], array];
  }
  const createGroup = (subGroup: [T[], T[]]): [T[], T[]] => {
    return [[array[0], ...subGroup[0]], subGroup[1]];
  };
  return createGroup(groupChunk(array.slice(1), size - 1));
}
