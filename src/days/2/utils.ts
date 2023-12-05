export function lineToObj(line: string) {
  const game: number = parseInt(line.match(/Game \d+/)[0]);
  const blue: number[] = line.match(/(\d+) blue/g).map(Number);

  return { game, blue };
}
