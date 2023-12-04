type numObjectType = {
  [key: string]: number;
};

type IndexType = {
  index: number;
  contents: string | number;
};

export const numObj: numObjectType = {
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

export function allIndexesOf(toSearch: string, target: string): number[] {
  let index = 0;
  let indexes = [];

  while ((index = toSearch.indexOf(target, index)) !== -1) {
    indexes.push(index);
    index += target.length;
  }
  return indexes;
}
export function findNumbers(searchString: string) {
  let textNumberIndexes: IndexType[] = [];
  let realNumberIndexes: IndexType[] = [];

  Object.keys(numObj).forEach((key) => {
    const indexes = allIndexesOf(searchString, key);
    indexes.map((index) => {
      textNumberIndexes.push({ index: index, contents: key });
    });
  });

  Object.values(numObj).forEach((value) => {
    const indexes = allIndexesOf(searchString, value.toString());
    indexes.map((index) => {
      realNumberIndexes.push({ index: index, contents: value });
    });
  });

  const combined = [...textNumberIndexes, ...realNumberIndexes];

  const sortedCombined = combined.slice().sort((a, b) => {
    return a.index - b.index;
  });

  const firstValue = sortedCombined[0].contents;
  const firstNumber =
    typeof firstValue == 'string' ? numObj[firstValue] : firstValue;

  const secondValue = sortedCombined.at(-1).contents;
  const secondNumber =
    typeof secondValue == 'string' ? numObj[secondValue] : secondValue;

  return [firstNumber.toString(), secondNumber.toString()].filter(Boolean);
}
