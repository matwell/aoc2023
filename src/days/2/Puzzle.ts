import { lineToObj, GameType, validGame, maximizedGame } from './utils';

const first = (input: string) => {
  const maxRed = 12;
  const maxGreen = 13;
  const maxBlue = 14;
  const lines = input.split('\n');

  const gameData: GameType[] = lines.map((line) => {
    return lineToObj(line);
  });

  const validGames = gameData.filter((game) => {
    return validGame(game, maxRed, maxGreen, maxBlue);
  });

  const result: number = validGames.reduce((acc: number, curr: GameType) => {
    return acc + curr.game;
  }, 0);

  return result;
};

const expectedFirstSolution = '2683';

const second = (input: string) => {
  const lines = input.split('\n');
  const gameData: GameType[] = lines.map((line) => {
    return lineToObj(line);
  });
  const maximizedData = gameData.map((game) => {
    return maximizedGame(game);
  });
  const totalPower = maximizedData.reduce((acc: number, curr) => {
    return acc + curr.red * curr.green * curr.blue;
  }, 0);

  return totalPower;
};

const expectedSecondSolution = 49710;

export { first, expectedFirstSolution, second, expectedSecondSolution };
