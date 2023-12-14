import {
  linesToAlmanac,
  sourceToDestination,
  generateConsecutiveNumbers,
} from './utils';

const first = (input: string) => {
  const lines = input.split('\n');
  const almanac = linesToAlmanac(lines);
  const seeds: number[] = lines[0]
    .split(' ')
    .slice(1)
    .map((s) => parseInt(s));

  const locations = seeds.map((seed) => {
    const soil = sourceToDestination(almanac, seed, 'seed-to-soil');
    const fertilizer = sourceToDestination(almanac, soil, 'soil-to-fertilizer');
    const water = sourceToDestination(
      almanac,
      fertilizer,
      'fertilizer-to-water'
    );
    const light = sourceToDestination(almanac, water, 'water-to-light');
    const temperature = sourceToDestination(
      almanac,
      light,
      'light-to-temperature'
    );
    const humidity = sourceToDestination(
      almanac,
      temperature,
      'temperature-to-humidity'
    );
    const location = sourceToDestination(
      almanac,
      humidity,
      'humidity-to-location'
    );
    return location;
  });

  return Math.min(...locations);
};

const expectedFirstSolution = 107430936;

const second = (input: string) => {
  const lines = input.split('\n');
  const almanac = linesToAlmanac(lines);
  const seedRanges: number[] = lines[0]
    .split(' ')
    .slice(1)
    .map((s) => parseInt(s));

  const seeds = [];
  const minLocations: number[] = [];

  for (let i = 0; i < seedRanges.length; i = i + 2) {
    const seeds = generateConsecutiveNumbers(seedRanges[i], seedRanges[i + 1]);

    const locations = seeds.map((seed) => {
      const soil = sourceToDestination(almanac, seed, 'seed-to-soil');
      const fertilizer = sourceToDestination(
        almanac,
        soil,
        'soil-to-fertilizer'
      );
      const water = sourceToDestination(
        almanac,
        fertilizer,
        'fertilizer-to-water'
      );
      const light = sourceToDestination(almanac, water, 'water-to-light');
      const temperature = sourceToDestination(
        almanac,
        light,
        'light-to-temperature'
      );
      const humidity = sourceToDestination(
        almanac,
        temperature,
        'temperature-to-humidity'
      );
      const location = sourceToDestination(
        almanac,
        humidity,
        'humidity-to-location'
      );
      return location;
    });
    minLocations.push(Math.min(...locations));
  }
  return Math.min(...minLocations);
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
