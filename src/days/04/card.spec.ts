import { Card } from './card';


describe('Card', () => {
  describe('fromString', () => {
    test.each([
      [
        'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
        { cardId: 1, winningNumbers: [41, 48, 83, 86, 17], scratchedNumbers: [83, 86, 6, 31, 17, 9, 48, 53] }
      ],
      [
        'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
        { cardId: 2, winningNumbers: [13, 32, 20, 16, 61], scratchedNumbers: [61, 30, 68, 82, 17, 32, 24, 19] }
      ],
      [
        'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
        { cardId: 3, winningNumbers: [1, 21, 53, 59, 44], scratchedNumbers: [69, 82, 63, 72, 16, 21, 14, 1] }
      ],
      [
        'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
        { cardId: 4, winningNumbers: [41, 92, 73, 84, 69], scratchedNumbers: [59, 84, 76, 51, 58, 5, 54, 83] }
      ],
      [
        'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
        { cardId: 5, winningNumbers: [87, 83, 26, 28, 32], scratchedNumbers: [88, 30, 70, 12, 93, 22, 82, 36] }
      ],
      [
        'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11',
        { cardId: 6, winningNumbers: [31, 18, 13, 56, 72], scratchedNumbers: [74, 77, 10, 23, 35, 67, 36, 11] }
      ],
    ])('should parse %s into %j', (input, expected) => {
      expect(Card.fromString(input as string)).toMatchObject(expected);
    });
  });

  describe('value', () => {
    test.each([
      ['Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53', 8],
      ['Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19', 2],
      ['Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1', 2],
      ['Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83', 1],
      ['Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36', 0],
      ['Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11', 0],
    ])('should parse %s into %i', (input, expected) => {
      expect(Card.fromString(input as string).value).toEqual(expected);
    });
  })
});
