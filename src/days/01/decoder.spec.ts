import { decodeStringNums } from "./decoder";
import each from 'jest-each';

describe('decodestringnums', () => {
  each([
    ['two1nine', 29],
    ['eightwothree', 83],
    ['abcone2threexyz', 13],
    ['xtwone3four', 24],
    ['4nineeightseven2', 42],
    ['zoneight234', 14],
    ['7pqrstsixteen', 76],
    ['twothreetwotwo', 22],
    ['1928274', 14],
    ['onetwo846two', 12]
  ]).test('%s should return %d', (a, b) => {
    expect(decodeStringNums(a)).toEqual(b);
  });
});