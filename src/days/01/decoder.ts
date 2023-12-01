import { isNumeric } from "../../util/is-numeric";

const NUMS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

export const decodeStringNums = (str: string, simpleMode = false): number | null => {
  const numbers: number[] = [];

  Array.from(str).forEach((char: string, idx: number) => {
    // check if it's a raw number
    if (isNumeric(char)) {
      numbers.push(parseInt(char, 10));
      return; // exits forEach early
    }

    if (simpleMode) return; // first star only requires us to look at actual numbers

    // cut off any chars we've already parsed, luckily there are no overlaps within number words
    const substr = str.slice(idx);
    NUMS.forEach((num, numIdx) => {
      if (substr.indexOf(num) === 0) {
        numbers.push(numIdx + 1);
        return; // exits forEach
      }
    });
  });

  // there might be a word that doesn't have any numbers, so check if we actually found something
  if (numbers.length) {
    return numbers[0] * 10 + numbers[numbers.length - 1];
  }

  return 0;
}
