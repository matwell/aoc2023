type numberData = {
  number: number;
  row: number;
  column: number;
};

export function convertToGrid(lines: string[]): string[][] {
  const grid: string[][] = lines.map((line) => {
    return line.split('');
  });
  return grid;
}
export function findAllNumbers(grid: string[][]): numberData[] {
  // find all the numbers in the grid
  const numbers: numberData[] = [];
  for (let i = 0; i < grid.length; i++) {
    const found = grid[i].join().match(/\d+/g);
    if (found) {
      found.forEach((number: string) => {
        numbers.push({
          number: parseInt(number),
          row: i,
          column: grid[i].indexOf(number),
        });
      });
    }
  }
  return numbers;
}
