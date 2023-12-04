import { findNumbers } from './utils';

const first = (input: string) => {
  const lines = input.split('\n');
  const lineNumbers = lines.map((line) => {
    const numbers: string[] = line.match(/\d/g);
    if (numbers?.length >= 2) {
      return parseInt(numbers[0].concat(numbers.at(-1)));
    } else if (numbers?.length === 1) {
      return parseInt(numbers[0].concat(numbers[0]));
    } else {
      return 0;
    }
  });
  const sum = lineNumbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum;
};

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {
  const lines = input.split('\n');
  let result;
  const lineNumbers = lines.map((line) => {
    const numbers: string[] = findNumbers(line);
    if (numbers?.length >= 2) {
      result = parseInt(numbers[0].concat(numbers.at(-1)));
    } else if (numbers?.length === 1) {
      result = parseInt(numbers[0].concat(numbers[0]));
    } else {
      result = 0;
    }
    return result;
  });

  const sum = lineNumbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return sum;
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
