import { FileReader } from "../../util/file-reader";
import { Day3Solver } from "./day3-solver";

export class Day03 {
  public static run() {
    const fr = new FileReader('03/input.txt');
    const solver = new Day3Solver();

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
