// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

export function maxChar(str: string): string {
  const setOfCharacter = new Set(str);
  const maxCharacherList = maxCharactersList(setOfCharacter, str);
  const maxTupple = maxCharacherList.reduce(
    (charCouple, charTupleList) => {
      return charTupleList[1] >= charCouple[1] ? charTupleList : charCouple;
    },
    ['', 0]
  );
  return maxTupple[0];
}

function maxCharactersList(
  setOfCharacter: Set<string>,
  str: string
): [string, number][] {
  return Array.from(setOfCharacter).map((char) => [
    char,
    numberChar(str, char),
  ]);
}

function numberChar(str: string, char: string): number {
  return str.split('').reduce((max, itemChar) => {
    return itemChar === char ? max + 1 : max;
  }, 0);
}
