// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

export function vowels(str: string) {
  const regex = /a|e|i|o|u/gi;
  return str.match(regex)?.length ?? 0;
}
