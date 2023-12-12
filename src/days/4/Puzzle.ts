import {
  linesToCards,
  Card,
  addWinsToCards,
  generateConsecutiveCards,
  CardWithWins,
} from './utils';

const first = (input: string) => {
  const lines = input.split('\n');
  const cards: Card[] = linesToCards(lines);

  const sum = cards.reduce((acc, curr) => {
    return acc + curr.points;
  }, 0);
  return sum;
};

const expectedFirstSolution = 22488;

const second = (input: string) => {
  const lines = input.split('\n');
  const cards: Card[] = linesToCards(lines);
  const cardsWithNumberOfWins = addWinsToCards(cards);
  let copies: CardWithWins[] = cardsWithNumberOfWins.slice();

  for (let i = 0; i < copies.length; i++) {
    if (copies[i].wins > 0) {
      const newCards = generateConsecutiveCards(
        cardsWithNumberOfWins,
        copies[i].cardNumber + 1,
        copies[i].wins
      );

      copies = copies.concat(newCards);
    }
  }

  return copies.length;
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
