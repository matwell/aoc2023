import { linesToCards, Card } from './utils';

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
  return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
