import { Day3Solver } from "./day3-solver";

describe('Day3Solver', () => {
  let subject: Day3Solver;
  beforeEach(() => {
    subject = new Day3Solver();
  })

  describe('processLine', () => {
    beforeEach(() => {
      [
        '467..114..',
        '...*......',
      ].forEach((line) => subject.processLine(line));
    });

    it('should process lines correctly', () => {
      expect(subject.lines[0]).toEqual(['4', '6', '7', null, null, '1', '1', '4', null, null]);
      expect(subject.lines[1]).toEqual([null, null, null, '*', null, null, null, null, null, null]);
    });
  });

  describe('part 1', () => {
    beforeEach(() => {
      [
        '467..114..',
        '...*......',
        '..35..633.',
        '......#...',
        '617*......',
        '.....+.58.',
        '..592.....',
        '......755.',
        '...$.*....',
        '.664.598..',
      ].forEach((line) => subject.processLine(line));
    });

    it('should solve to the right sum', () => {
      expect(subject.solveOne()).toEqual(4361);
    })
  })

  describe('part 2', () => {
    beforeEach(() => {
      [
        '467..114..',
        '...*......',
        '..35..633.',
        '......#...',
        '617*......',
        '.....+.58.',
        '..592.....',
        '......755.',
        '...$.*....',
        '.664.598..',
      ].forEach((line) => subject.processLine(line));
    });

    it('should solve to the right sum', () => {
      expect(subject.solveTwo()).toEqual(467835);
    })
  });
});
