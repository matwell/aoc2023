export type Race = {
  time: number;
  distance: number;
};

export function linesToRaces(lines: string[]): Race[] {
  const times = lines[0].split(/\s+/).slice(1);
  const distances = lines[1].split(/\s+/).slice(1);
  const races = times.map((time, i) => {
    return {
      time: parseInt(time),
      distance: parseInt(distances[i]),
    };
  });
  return races;
}

export function numberOfWaysToWin(race: Race) {
  let numberOfWays = 0;
  for (let i = 1; i < race.time; i++) {
    const timeToMove = race.time - i;
    const distanceMoved = timeToMove * i;
    if (distanceMoved > race.distance) {
      numberOfWays++;
    }
  }
  return numberOfWays;
}
