import { findAllNumbers, convertToGrid } from './utils';

const first = (input: string) => {
  const lines: string[] = input.split('\n');
  //Convert lines to 2d array
  const grid: string[][] = convertToGrid(lines);

  const numbers = findAllNumbers(grid);
  return 'solution 1';
};

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {
  return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
