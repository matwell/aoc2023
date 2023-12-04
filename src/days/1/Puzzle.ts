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

function allIndexesOf(toSearch: string, target: string): number[] {
  let index = 0;
  let indexes = [];

  while ((index = toSearch.indexOf(target, index)) !== -1) {
    indexes.push(index);
    index += target.length;
  }
  return indexes;
}

function findNumbers(searchString: string) {
  const textNumberIndexes = Object.keys(numObj)
    .map((key) => {
      return { [searchString.indexOf(key)]: key };
    })
    .filter((obj) => {
      return Object.keys(obj)[0] != '-1';
    });

  const realNumberIndexes = Object.values(numObj)
    .map((value) => {
      return { [searchString.indexOf(value.toString())]: value };
    })
    .filter((obj) => {
      return Object.keys(obj)[0] != '-1';
    });

  const combined = [...textNumberIndexes, ...realNumberIndexes];

  const sortedCombined = combined.slice().sort((a, b) => {
    const keyA = parseInt(Object.keys(a)[0]);
    const keyB = parseInt(Object.keys(b)[0]);
    return keyA - keyB;
  });
  console.log(sortedCombined);

  const firstValue = Object.values(sortedCombined[0])[0];
  const firstNumber =
    typeof firstValue == 'string' ? numObj[firstValue] : firstValue;

  const secondValue = Object.values(sortedCombined.at(-1))[0];
  const secondNumber =
    typeof secondValue == 'string' ? numObj[secondValue] : secondValue;

  return [firstNumber.toString(), secondNumber.toString()].filter(Boolean);
}

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
    console.log(line, result);
    return result;
  });

  const sum = lineNumbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  console.log(sum);

  return sum;
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
