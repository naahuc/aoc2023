import { CubeColors } from "./cube-colors";
import { GameData } from "./game-data";

const redEx = /.*?(\d*)\sred.*/;
const blueEx = /.*?(\d*)\sblue.*/;
const greenEx = /.*?(\d*)\sgreen.*/;

const gameCaps: CubeColors = {
  red: 12,
  green: 13,
  blue: 14
};

export const solveOne = (str: string): number => {
  const game: GameData = parseLine(str);

  if (isPossible(game.cubes)) {
    return game.gameId;
  }
  return 0;
}

export const solveTwo = (str: string): number => {
  const gameState: GameData = parseLine(str);
  const max = findMinCubes(gameState.cubes);

  return max.red * max.blue * max.green;
}

export const parseLine = (str: string): GameData => {
  const gameData: GameData = {
    gameId: 0,
    cubes: []
  };

  const carry = str.split(':') as string[];

  gameData.gameId = parseInt(carry[0].replace('Game ', ''), 10);
  gameData.cubes = carry[1].split(';').map<CubeColors>(data => {
    const r = data.match(redEx) || ['', '0'];
    const g = data.match(greenEx) || ['', '0'];
    const b = data.match(blueEx) || ['', '0'];

    return {
      red: parseInt(r[1], 10),
      green: parseInt(g[1], 10),
      blue: parseInt(b[1], 10)
    };
  });

  return gameData;
};

export const isPossible = (choices: CubeColors[], caps: CubeColors = gameCaps): boolean => {
  for (const choice of choices) {
    if (choice.red > caps.red) return false;
    if (choice.blue > caps.blue) return false;
    if (choice.green > caps.green) return false;
  }

  return true;
}

export const findMinCubes = (cubes: CubeColors[]): CubeColors => {
  return cubes.reduce((carry, current) => {
    return {
      red: Math.max(carry.red, current.red),
      blue: Math.max(carry.blue, current.blue),
      green: Math.max(carry.green, current.green)
    }
  }, { red: 0, blue: 0, green: 0 })
};
