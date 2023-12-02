import each from "jest-each";
import { findMinCubes, isPossible, parseLine } from "./solver";

describe('solver', () => {
  describe('parser', () => {
    each([
      ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', {
        gameId: 1, cubes: [
          { red: 4, green: 0, blue: 3 },
          { red: 1, green: 2, blue: 6 },
          { red: 0, green: 2, blue: 0 },
        ]
      }],
      ['Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', {
        gameId: 2, cubes: [
          { red: 0, green: 2, blue: 1 },
          { red: 1, green: 3, blue: 4 },
          { red: 0, green: 1, blue: 1 },
        ]
      }],
      ['Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', {
        gameId: 3, cubes: [
          { red: 20, green: 8, blue: 6 },
          { red: 4, green: 13, blue: 5 },
          { red: 1, green: 5, blue: 0 },
        ]
      }],
      ['Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', {
        gameId: 4, cubes: [
          { red: 3, green: 1, blue: 6 },
          { red: 6, green: 3, blue: 0 },
          { red: 14, green: 3, blue: 15 },
        ]
      }],
      ['Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', {
        gameId: 5, cubes: [
          { red: 6, green: 3, blue: 1 },
          { red: 1, green: 2, blue: 2 },
        ]
      }],
    ]).test('%s should return correct data', (a, b) => {
      expect(parseLine(a)).toMatchObject(b);
    });
  });

  describe('isPossible', () => {
    const gameData = { red: 10, blue: 10, green: 10 };

    it('should return true when single game is possible', () => {
      expect(isPossible([{ red: 5, green: 5, blue: 5 }], gameData)).toEqual(true)
    });

    it('should return true when all games are possible', () => {
      expect(isPossible([{ red: 5, green: 5, blue: 5 }, { red: 1, green: 2, blue: 3 }], gameData)).toEqual(true)
    });

    it('should return false when red is not possible', () => {
      expect(isPossible([{ red: 15, green: 5, blue: 5 }], gameData)).toEqual(false);
    });

    it('should return false when green is not possible', () => {
      expect(isPossible([{ red: 5, green: 15, blue: 5 }], gameData)).toEqual(false);
    });

    it('should return false when blue is not possible', () => {
      expect(isPossible([{ red: 5, green: 5, blue: 15 }], gameData)).toEqual(false);
    });

    it('should return false when one game is not possible', () => {
      expect(isPossible([{ red: 5, green: 15, blue: 5 }, { red: 1, green: 2, blue: 3 }], gameData)).toEqual(false)
    });
  });

  describe('findMinCubes', () => {
    each([
      ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', { red: 4, green: 2, blue: 6 }],
      ['Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', { red: 1, green: 3, blue: 4 }],
      ['Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', { red: 20, green: 13, blue: 6 }],
      ['Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', { red: 14, green: 3, blue: 15 }],
      ['Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', { red: 6, green: 3, blue: 2 }]
    ]).test("%s gives the correct result", (a, b) => {
      const gameState = parseLine(a);
      expect(findMinCubes(gameState.cubes)).toMatchObject(b);
    })
  });
});


