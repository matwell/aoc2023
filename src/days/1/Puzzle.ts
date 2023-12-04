type numObjectType = {
  [key: string]: number;
};

const numObj: numObjectType = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

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

function findNumbers(searchString: string) {
  let firstNumber: number;
  let secondNumber: number;
  const textNumberIndexes = Object.keys(numObj)
    .map((key) => {
      return { [searchString.indexOf(key)]: key };
    })
    .filter((obj) => {
      return Object.keys(obj)[0] != '-1';
    });
  console.log(
    '🚀 ~ file: Puzzle.ts:47 ~ findNumbers ~ textNumberIndexes:',
    textNumberIndexes
  );

  const realNumberIndexes = Object.values(numObj)
    .map((value) => {
      return { [searchString.indexOf(value.toString())]: value };
    })
    .filter((obj) => {
      return Object.keys(obj)[0] != '-1';
    });
  console.log(
    '🚀 ~ file: Puzzle.ts:56 ~ findNumbers ~ realNumberIndexes:',
    realNumberIndexes
  );

  if (
    Object.keys(realNumberIndexes[0])[0] > Object.keys(textNumberIndexes[0])[0]
  ) {
    const firstValue = Object.values(textNumberIndexes[0])[0];
    firstNumber = numObj[firstValue];
  } else {
    firstNumber = Object.values(realNumberIndexes[0])[0];
  }

  if (
    Object.keys(realNumberIndexes[0]).at(-1) <
    Object.keys(textNumberIndexes[0]).at(-1)
  ) {
    const secondValue = Object.values(textNumberIndexes[0]).at(-1);
    secondNumber = numObj[secondValue];
  } else {
    secondNumber = Object.values(realNumberIndexes[0]).at(-1);
  }

  return [firstNumber, secondNumber];
}
console.log(findNumbers('onetwo'));

const second = (input: string) => {
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

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
