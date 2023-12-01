import each from 'jest-each';
import { decodeStringNums } from "./decoder";

describe('decodestringnums', () => {
  describe('first star conditions', () => {
    each([
      ['two1nine', 11],
      ['eightwothree', 0],
      ['abcone2threexyz', 22],
      ['xtwone3four', 33],
      ['4nineeightseven2', 42],
      ['zoneight234', 24],
      ['7pqrstsixteen', 77],
      ['twothreetwotwo', 0],
      ['1928274', 14],
      ['onetwo846two', 86]
    ]).test('%s should return %d', (a, b) => {
      expect(decodeStringNums(a, true)).toEqual(b);
    });
  });

  describe('second star conditions', () => {
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
      ['onetwo846two', 12],
      ['8nine37bpkmtghhnc2hnreightwohvs', 82]
    ]).test('%s should return %d', (a, b) => {
      expect(decodeStringNums(a)).toEqual(b);
    });
  });
});
