import { getSum } from "../../util/get-sum";
import { isNumeric } from "../../util/is-numeric";

export class Day3Solver {
  private readonly _lines: (string | null)[][] = [];
  private workingCopy!: (string | null)[][];

  public processLine(line: string) {
    this._lines.push(Array.from(line).map(char => char === '.' ? null : char));
  }

  public solveOne() {
    this.makeWorkingCopy();
    return getSum(this.lines.map((row, rIdx) => {
      return getSum(row.map((column, cIdx) => {
        if (column && !isNumeric(column)) {
          return this.calculateSurroundingNumbers(rIdx, cIdx, this.calculateForOne);
        }
        return 0;
      }));
    }));
  }

  public solveTwo() {
    this.makeWorkingCopy();
    return getSum(this.lines.map((row, rIdx) => {
      return getSum(row.map((column, cIdx) => {
        if (column && column == '*') {
          return this.calculateSurroundingNumbers(rIdx, cIdx, this.calculateForTwo);
        }
        return 0;
      }));
    }));
  }

  private makeWorkingCopy(): void {
    this.workingCopy = JSON.parse(JSON.stringify(this._lines));
  }

  private calculateSurroundingNumbers(row: number, column: number, callback: ((fieldIndices: number[][]) => number)): number {
    const fieldIndices = [
      [row - 1, column - 1], // top left
      [row - 1, column], // top
      [row - 1, column + 1], // top right
      [row, column - 1], // left
      [row, column + 1], // right
      [row + 1, column - 1], // bottom left
      [row + 1, column], // bottom center
      [row + 1, column + 1], // bottom right
    ].filter(idx => {
      // removes boxes outside the dataset, gonna assume for simplicities sake that dataset is a rectangle (hopefully)
      return idx[0] >= 0 && idx[0] < this.lines.length && idx[1] >= 0 && idx[1] < this.lines[0].length
    });

    return callback(fieldIndices);
  }

  private calculateForOne = (fieldIndices: number[][]): number => {
    let idxSum = 0;

    fieldIndices.forEach(([r, c]) => {
      if (!!this.lines[r][c] && isNumeric(this.lines[r][c] as string)) {
        let column = c;
        // go left until we're past the number or hit the edge
        while (column > 0 && this.lines[r][column - 1] && isNumeric(this.lines[r][column - 1] as string)) {
          column--;
        }

        let carry = '';

        // now go right until we hit a non-digit
        while (column < this.lines[r].length && !!this.lines[r][column] && isNumeric(this.lines[r][column] as string)) {
          carry += this.lines[r][column];
          this.lines[r][column] = null; // unset already parsed numbers so we don't doubleparse them
          column++;
        }

        idxSum += parseInt(carry, 10) || 0;
      }
    });

    return idxSum;
  }

  private calculateForTwo = (fieldIndices: number[][]): number => {
    const numbers: number[] = [];
    // avoid sideeffects, yes I know this is bad, but I don't care about runtime in this example
    const deepCopy = JSON.parse(JSON.stringify(this.lines));

    fieldIndices.forEach(([r, c]) => {
      if (!!deepCopy[r][c] && isNumeric(deepCopy[r][c] as string)) {
        let column = c;
        // go left until we're past the number or hit the edge
        while (column > 0 && deepCopy[r][column - 1] && isNumeric(deepCopy[r][column - 1] as string)) {
          column--;
        }

        let carry = '';

        // now go right until we hit a non-digit
        while (column < deepCopy[r].length && !!deepCopy[r][column] && isNumeric(deepCopy[r][column] as string)) {
          carry += deepCopy[r][column];
          deepCopy[r][column] = null; // unset again to avoid powering
          column++;
        }
        numbers.push(parseInt(carry, 10));
      }
    });

    if (numbers.length > 1) {
      return numbers.reduce((mult, num) => mult * num, 1);
    }
    return 0;
  }

  public get lines(): (string | null)[][] {
    if (!this.workingCopy) {
      this.makeWorkingCopy(); // just in case we don't run over one of the solveX first (like in the specs)
    }
    return this.workingCopy;
  }
}
