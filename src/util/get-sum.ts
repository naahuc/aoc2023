export const getSum = (numbers: number[]): number => {
  return numbers.reduce(((carry, value) => carry + value), 0);
}
