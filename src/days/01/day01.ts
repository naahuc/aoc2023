import { FileReader } from "../../util/file-reader";
import { getSum } from "../../util/get-sum";
import { decodeStringNums } from "./decoder";

export class Day01 {
  public static run() {
    const fr = new FileReader('01/input.txt');
    const first: number[] = [];
    const second: number[] = [];

    fr.addNewLineListener((line: string) => {
      const numberFromLine = decodeStringNums(line, true);
      if (numberFromLine) first.push(numberFromLine);
    });

    fr.addNewLineListener((line: string) => {
      const numberFromLine = decodeStringNums(line);
      if (numberFromLine) second.push(numberFromLine);
    });

    fr.addCloseListener(() => {
      console.info(`First star: ${getSum(first)}`);
      console.info(`Second star: ${getSum(second)}`);
    })

    fr.process();
  }
}
