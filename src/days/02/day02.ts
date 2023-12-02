import { FileReader } from "../../util/file-reader";
import { getSum } from "../../util/get-sum";
import { solveOne, solveTwo } from "./solver";

export class Day02 {
  public static run() {
    const fr = new FileReader('02/input.txt');

    const firstPossibleGames: number[] = [];
    const secondPowers: number[] = [];

    fr.addNewLineListener((line: string) => {
      firstPossibleGames.push(solveOne(line));
    });

    fr.addNewLineListener((line: string) => {
      secondPowers.push(solveTwo(line));
    });

    fr.addCloseListener(() => {
      console.log('First Star: ' + getSum(firstPossibleGames));
      console.log('Second Star: ' + getSum(secondPowers));
    })

    fr.process();
  }
}
