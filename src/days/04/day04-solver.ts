import { Card } from "./card";

export class Day04Solver {
  private cards: Card[] = [];

  public processLine(input: string): void {
    this.cards.push(Card.fromString(input));
  }

  public solveOne(): number {
    return this.cards.reduce((sum, card) => sum + card.value, 0);
  }

  public solveTwo(): number {
    const wackoCards: { card: Card, count: number }[] = [];

    this.cards.forEach(card => {
      if (!wackoCards.find(c => c.card.cardId === card.cardId)) {
        wackoCards.push({ card, count: 1 });
      }
    });

    this.cards.forEach(card => {
      const wackCard = wackoCards.find(c => c.card.cardId === (card.cardId));
      for (let i = 1; i <= card.countMatches; i++) {
        const tmpCard = wackoCards.find(c => c.card.cardId === (card.cardId + i));
        if (tmpCard) tmpCard.count += wackCard?.count || 0;
      }
    });

    return wackoCards.reduce((carry, card) => carry + card.count, 0);
  }
}
