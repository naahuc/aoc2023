import { getSum } from "./get-sum";

describe('getSum', () => {
  it('should return the sum when given a number array', () => {
    expect(getSum([1, 2, 3])).toEqual(6);
  });

  it('should return 0 when given an empty array', () => {
    expect(getSum([])).toEqual(0);
  })
});