// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

export function anagrams(stringA:string, stringB:string):boolean {
  const reducedSortedStringA = reducedSortedString(stringA);
  const reducedSortedStringB = reducedSortedString(stringB);
  return  reducedSortedStringA.join('') === reducedSortedStringB.join('');
}


function reducedSortedString(text:string):string[]{
return text.replace(/[^\w]/g, "").toLowerCase().split('').sort(); // delete spaces;
}