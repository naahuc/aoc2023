export class Card {
  cardId: number;
  winningNumbers: number[];
  scratchedNumbers: number[];

  private _matches: number | undefined = undefined;

  constructor(cardId: number, winningNumbers: number[], scratchedNumbers: number[]) {
    this.cardId = cardId;
    this.winningNumbers = winningNumbers;
    this.scratchedNumbers = scratchedNumbers;
  }

  public static fromString(input: string): Card {
    let parsed: string[] = input.split(':'); // [0] = Card   1 [1] = rest
    const cardId = parseInt(parsed[0].substring(4), 10);
    parsed = parsed[1].split('|');

    return new Card(
      cardId,
      parsed[0].split(' ').filter(e => e !== ' ' && e !== '').map(e => parseInt(e, 10)),
      parsed[1].split(' ').filter(e => e != ' ' && e !== '').map(e => parseInt(e, 10))
    );
  }

  public get value(): number {
    const matches = this.countMatches;
    return this.countMatches === 0 ? 0 : Math.pow(2, matches - 1);
  }

  public get countMatches(): number {
    if (this._matches !== undefined) {
      return this._matches;
    }

    this._matches = this.winningNumbers
      .map(num => {
        return this.scratchedNumbers.filter(sNum => sNum === num).length;
      })
      .filter(count => count > 0)
      .reduce((carry, num) => carry + num, 0);

    return this._matches;
  }
}
