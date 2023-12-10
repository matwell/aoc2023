export type numberData = {
  number: number;
  row: number;
  column: number;
};

export type LocationType = {
  row: number;
  column: number;
};

export function convertToGrid(lines: string[]): string[][] {
  const grid: string[][] = lines.map((line) => {
    return line.trim().split('');
  });
  return grid;
}

export function extractNumbers(input: string[]): string[] {
  return input.join('').match(/\d+/g);
}

export function findAllNumbers(grid: string[][]): numberData[] {
  // find all the numbers in the grid
  const numbers: numberData[] = [];
  for (let i = 0; i < grid.length; i++) {
    const found = extractNumbers(grid[i]);

    if (found) {
      let prevCol = 0;
      found.forEach((number: string) => {
        const colNum = grid[i].join('').slice(prevCol).indexOf(number);
        numbers.push({
          number: parseInt(number),
          row: i,
          column: prevCol + colNum,
        });
        prevCol = prevCol + number.length + colNum;
      });
    }
  }
  return numbers;
}

export function findNeighboursOfNumber(
  number: numberData,
  grid: string[][]
): string[] {
  const numLength = number.number.toString().length;
  const leftColumn = number.column > 0 ? number.column - 1 : number.column;
  const rowAbove =
    grid[number.row - 1]?.slice(leftColumn, number.column + numLength + 1) ??
    [];
  const rowBelow =
    grid[number.row + 1]?.slice(leftColumn, number.column + numLength + 1) ??
    [];
  const left = grid[number.row][number.column - 1];
  const right = grid[number.row][number.column + numLength];
  return [...rowAbove, ...rowBelow, left, right].filter(Boolean);
}

export function containsSymbol(data: string[]): boolean {
  const result = data.some((element) => element.match(/\d|\./) === null);
  return result;
}

export function filterToPartNumbers(numbers: numberData[], grid: string[][]) {
  return numbers.filter((number) =>
    containsSymbol(findNeighboursOfNumber(number, grid))
  );
}

export function sumAllPartNumbers(data: numberData[]): number {
  return data.reduce((acc: number, curr: numberData) => {
    return acc + curr.number;
  }, 0);
}

export function printGrid(grid: string[][], data: numberData[]) {
  //console.log every element of grid, starting on a new line when needed unless the element is in data
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const element = grid[i][j];
      const found = data.find((item) => item.row === i && item.column === j);
      if (found) {
        for (let k = 0; k < found.number.toString().length; k++) {
          process.stdout.write('.');
          j++;
        }
      } else {
        process.stdout.write(element);
      }
    }
    process.stdout.write('\n');
  }
}

export function findAllStars(grid: string[][]): LocationType[] {
  const stars: LocationType[] = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '*') {
        stars.push({ row: i, column: j });
      }
    }
  }
  return stars;
}

export function findWholeNumber(
  row: number,
  column: number,
  grid: string[][]
): number {
  let start = column;
  let end = column;
  while (grid[row][start - 1]?.match(/\d/)) {
    start--;
  }
  while (grid[row][end + 1]?.match(/\d/)) {
    end++;
  }

  return start === end
    ? parseInt(grid[row][start])
    : parseInt(grid[row].slice(start, end + 1).join(''));
}

export function isDigit(str: string) {
  return !Number.isNaN(parseInt(str));
}

export function removeConsecutiveDuplicates(arr: number[]): number[] {
  return arr.filter((num, index) => num !== arr[index + 1]);
}

export function findSurroundingNumbers(
  location: LocationType,
  grid: string[][]
) {
  const rowAboveNumbers: number[] = [];
  const rowBelowNumbers: number[] = [];
  let left: number | null = null;
  let right: number | null = null;

  for (let i = location.column - 1; i <= location.column + 1; i++) {
    if (isDigit(grid[location.row - 1][i])) {
      rowAboveNumbers.push(findWholeNumber(location.row - 1, i, grid));
    }
  }

  for (let i = location.column - 1; i <= location.column + 1; i++) {
    if (isDigit(grid[location.row + 1][i])) {
      rowBelowNumbers.push(findWholeNumber(location.row + 1, i, grid));
    }
  }

  if (isDigit(grid[location.row][location.column - 1])) {
    left = grid[location.row][location.column - 1]
      ? findWholeNumber(location.row, location.column - 1, grid)
      : null;
  }

  if (isDigit(grid[location.row][location.column + 1])) {
    right = grid[location.row][location.column + 1]
      ? findWholeNumber(location.row, location.column + 1, grid)
      : null;
  }

  const above = removeConsecutiveDuplicates(rowAboveNumbers);
  const below = removeConsecutiveDuplicates(rowBelowNumbers);

  return [...above, ...below, left, right].flat().filter(Boolean);
}

// export function findSurroundingNumbers(
//   location: LocationType,
//   grid: string[][]
// ): number[] {
//   const aboveRow = grid[location.row - 1].slice(
//     location.column - 1,
//     location.column + 2
//   );
//   const belowRow = grid[location.row + 1].slice(
//     location.column - 1,
//     location.column + 2
//   );

//   if (isDigit(aboveRow[0]) && isDigit(aboveRow[2])) {
//     const above = [
//       findWholeNumber(location.row - 1, location.column - 1, grid),
//       findWholeNumber(location.row - 1, location.column + 1, grid),
//     ];
//   } else if (isDigit(aboveRow[0])) {
//     const above = [
//       findWholeNumber(location.row - 1, location.column - 1, grid),
//     ];
//   } else if (isDigit(aboveRow[2])) {
//     const above = [
//       findWholeNumber(location.row - 1, location.column + 1, grid),
//     ];
//   } else if (isDigit(aboveRow[1])) {
//     const above = [findWholeNumber(location.row - 1, location.column, grid)];
//   } else {
//     const above = [];
//   }

//   const above: number = grid[location.row - 1][location.column]
//     ? findWholeNumber(location.row - 1, location.column, grid)
//     : null;

//   const below = grid[location.row + 1][location.column]
//     ? findWholeNumber(location.row + 1, location.column, grid)
//     : null;

//   const left = grid[location.row][location.column - 1]
//     ? findWholeNumber(location.row, location.column - 1, grid)
//     : null;

//   const right = grid[location.row][location.column + 1]
//     ? findWholeNumber(location.row, location.column + 1, grid)
//     : null;

//   return [above, below, left, right].filter(Boolean);
// }
