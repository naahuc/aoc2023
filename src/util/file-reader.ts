import { Interface } from "readline/promises";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReadlineExecutor = (...args: any[]) => void;

export class FileReader {
  private readline = require('node:readline');
  private fs = require('fs');
  private rl!: Interface;
  private file: string;

  private onNewLine: ReadlineExecutor[] = [];
  private onClose: ReadlineExecutor[] = [];

  constructor(fileName: string) {
    this.file = __dirname + '/../../data/' + fileName;
  }

  public process(): void {
    this.rl = this.readline.createInterface({
      input: this.fs.createReadStream(this.file),
      crlfDelay: Infinity,
    });

    this.onNewLine.forEach(fn => this.rl.on('line', fn));
    this.onClose.forEach(fn => this.rl.on('close', fn));
  }

  public addNewLineListener(fn: ReadlineExecutor): void {
    this.onNewLine.push(fn);
  }

  public addCloseListener(fn: ReadlineExecutor): void {
    this.onClose.push(fn);
  }
}
