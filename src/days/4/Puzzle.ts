import { linesToCards } from './utils';

const first = (input: string) => {
  const lines = input.split('\n');
  const cards = linesToCards(lines);
  return 'solution 1';
};

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {
  return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
