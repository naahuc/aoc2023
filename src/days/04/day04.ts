import { FileReader } from "../../util/file-reader";
import { Day04Solver } from "./day04-solver";

export class Day04 {
  public static run() {
    const fr = new FileReader('04/input.txt');
    const solver = new Day04Solver();

    fr.addNewLineListener((line: string) => {
      solver.processLine(line);
    });


    fr.addCloseListener(() => {
      console.log('First Star: ' + solver.solveOne());
      console.log('Second Star: ' + solver.solveTwo());
    })

    fr.process();
  }
}
