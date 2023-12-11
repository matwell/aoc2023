export type Card = {
  cardNumber: number;
  winningNumbers: number[];
  numbersOnCard: number[];
  points: number;
};

export function calculatePoints(
  winningNumbers: number[],
  numbersOnCard: number[]
): number {
  let points = 0;
  numbersOnCard.forEach((number) => {
    if (winningNumbers.includes(number)) {
      points = points === 0 ? (points = 1) : points * 2;
    }
  });
  return points;
}
export function linesToCards(lines: string[]): Card[] {
  const cards: Card[] = lines.map((line) => {
    const splitLine = line.split(/\s+/);
    const indexOfLine = splitLine.indexOf('|');
    const cardNumber = parseInt(splitLine[1]);
    const winningNumbers = splitLine
      .slice(2, indexOfLine)
      .map((x) => parseInt(x));
    const numbersOnCard = splitLine
      .slice(indexOfLine + 1)
      .map((x) => parseInt(x));
    const points = calculatePoints(winningNumbers, numbersOnCard);

    return {
      cardNumber,
      winningNumbers,
      numbersOnCard,
      points,
    };
  });
  return cards;
}
