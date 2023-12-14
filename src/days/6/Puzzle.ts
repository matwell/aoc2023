import { linesToRaces, numberOfWaysToWin, Race } from './utils';

const first = (input: string) => {
  const lines = input.split('\n');
  const races = linesToRaces(lines);
  const ways = races.map((race) => {
    return numberOfWaysToWin(race);
  });

  const result = ways.reduce((acc, curr) => {
    return acc * curr;
  });
  return result;
};

const expectedFirstSolution = 281600;

const second = (input: string) => {
  const lines = input.split('\n');
  const time = parseInt(lines[0].split(/\s+/).slice(1).join(''));
  const distance = parseInt(lines[1].split(/\s+/).slice(1).join(''));
  const race: Race = {
    time,
    distance,
  };
  const ways = numberOfWaysToWin(race);

  return ways;
};

const expectedSecondSolution = 33875953;

export { first, expectedFirstSolution, second, expectedSecondSolution };
