import { FileReader } from "../../util/file-reader";

export class Day02 {
  public static run() {
    const fr = new FileReader('02/input.txt');

    fr.addNewLineListener((line: string) => {
    });

    fr.addCloseListener(() => {
      console.log();
    })

    fr.process();
  }
}