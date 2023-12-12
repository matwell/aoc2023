export type Card = {
  cardNumber: number;
  winningNumbers: number[];
  numbersOnCard: number[];
  points: number;
};

export type CardWithWins = {
  cardNumber: number;
  wins: number;
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

export function calculateWins(
  winningNumbers: number[],
  numbersOnCard: number[]
): number {
  let points = 0;
  numbersOnCard.forEach((number) => {
    if (winningNumbers.includes(number)) {
      points++;
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

export function addWinsToCards(cards: Card[]): CardWithWins[] {
  return cards.map((card) => {
    return {
      cardNumber: card.cardNumber,
      wins: calculateWins(card.winningNumbers, card.numbersOnCard),
    };
  });
}

export function generateConsecutiveCards(
  cards: CardWithWins[],
  startCard: number,
  numOfCards: number
) {
  return cards.slice(startCard - 1, startCard + numOfCards - 1);
}

export function calculateCopies(cards: CardWithWins[]): number {
  cards.forEach((card) => {
    console.log(card.cardNumber);
  });

  if (cards[0] === undefined || cards[0].wins === 0) {
    return 0;
  } else {
    const nextCards = cards.slice(1, cards[0].wins + 1);

    return cards[0].wins + 1 + calculateCopies(nextCards);
  }
}
