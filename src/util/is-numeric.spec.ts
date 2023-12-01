import { isNumeric } from "./is-numeric"

describe('isNumeric', () => {
  it('should return false when given a character', () => {
    expect(isNumeric('a')).toBe(false);
  });

  it('should return true when given an integer', () => {
    expect(isNumeric('1')).toBe(true);
  })

  it('should return true when given a float', () => {
    expect(isNumeric('1.23')).toBe(true);
  })
})