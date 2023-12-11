type Card = {
  cardNumber: number;
  winningNumbers: number[];
  numbersOnCard: number[];
};
export function linesToCards(lines: string[]): Card[] {
  const cards: Card[] = lines.map((line) => {
    const cardNumber = parseInt(line.match(/\s(\d+):/)[0]);
    const winningNumbers = line
      .match(/:(\s+\d+)\|/)
      .map((x) => parseInt(x.trim()));
    const numbersOnCard = line
      .match(/|(\s+\d+)/)
      .map((x) => parseInt(x.trim()));

    return {
      cardNumber,
      winningNumbers,
      numbersOnCard,
    };
  });
  return cards;
}
