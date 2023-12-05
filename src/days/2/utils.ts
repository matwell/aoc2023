export type GameType = {
  game: number;
  red: number[];
  blue: number[];
  green: number[];
};

export function lineToObj(line: string): GameType {
  const gameRegEx = /\d+/;

  const game: number = parseInt(gameRegEx.exec(line)[0]);
  const red: number[] = line
    .match(/\d+ red/g)
    .map((x) => parseInt(x.split(' ')[0]));
  const green: number[] = line
    .match(/\d+ green/g)
    .map((x) => parseInt(x.split(' ')[0]));
  const blue: number[] = line
    .match(/\d+ blue/g)
    .map((x) => parseInt(x.split(' ')[0]));

  return { game: game, red: red, green: green, blue: blue };
}

export function validGame(
  game: GameType,
  red: number,
  green: number,
  blue: number
) {
  const validRed = Math.max(...game.red) <= red;
  const validGreen = Math.max(...game.green) <= green;
  const validBlue = Math.max(...game.blue) <= blue;
  return validRed && validGreen && validBlue;
}

export function maximizedGame(game: GameType) {
  const maxRed = Math.max(...game.red);
  const maxGreen = Math.max(...game.green);
  const maxBlue = Math.max(...game.blue);
  return { red: maxRed, green: maxGreen, blue: maxBlue };
}
