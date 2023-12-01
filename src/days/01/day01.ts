import { FileReader } from "../../util/file-reader";
import { getSum } from "../../util/get-sum";
import { decodeStringNums } from "./decoder";

export class Day01 {
  public static run() {
    const fr = new FileReader('01/input.txt');
    const numbers: number[] = [];

    fr.addNewLineListener((line: string) => {
      const lineNumber = decodeStringNums(line);

      if (lineNumber) numbers.push(lineNumber);
    });

    fr.addCloseListener(() => {
      console.log(getSum(numbers));
    })

    fr.process();
  }
}