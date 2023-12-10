import {
  numberData,
  findAllNumbers,
  convertToGrid,
  filterToPartNumbers,
  sumAllPartNumbers,
  findAllStars,
  findSurroundingNumbers,
} from './utils';

const first = (input: string) => {
  const lines: string[] = input.split('\n');
  //Convert lines to 2d array
  const grid: string[][] = convertToGrid(lines);

  const numbers = findAllNumbers(grid);

  const partNumbers: numberData[] = filterToPartNumbers(numbers, grid);

  const sum: number = sumAllPartNumbers(partNumbers);

  return sum;
};

const expectedFirstSolution = '550064';

const second = (input: string) => {
  const lines: string[] = input.split('\n');
  //Convert lines to 2d array
  const grid: string[][] = convertToGrid(lines);

  const stars = findAllStars(grid);

  const numberArraysAroundStars = stars.map((star) => {
    return findSurroundingNumbers(star, grid);
  });

  const gearNumbers = numberArraysAroundStars.filter(
    (numbers) => numbers.length === 2
  );
  // console.log(gearNumbers);

  const result = gearNumbers.reduce((acc, curr) => {
    return acc + curr[0] * curr[1];
  }, 0);

  return result;
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
