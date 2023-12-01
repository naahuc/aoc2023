import { isNumeric } from "../../util/is-numeric";

const NUMS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

export const decodeStringNums = (str: string): number | null => {
  NUMS.forEach((num, idx) => {
    str = decodeSingleNum(str, num, idx + 1);
  });

  const digits = Array.from(str).filter(x => isNumeric(x));

  if (digits.length > 0) {
    return new Number(`${digits[0]}${digits[digits.length - 1]}`).valueOf();
  }

  return null;
}

const decodeSingleNum = (str: string, num: string, dig: number) => {
  let idx;
  if ((idx = str.indexOf(num)) !== -1) {
    str = `${str.slice(0, idx + 1)}${dig}${str.slice(idx + 1)}`;
    str = decodeSingleNum(str, num, dig);
  }
  return str;
}