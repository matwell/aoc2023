export type Map = {
  destination: number;
  source: number;
  range: number;
};

export type Almanac = {
  [key: string]: Map[];
};

export function linesToAlmanac(lines: string[]): Almanac {
  const almanac: Almanac = {};
  lines.forEach((line, i) => {
    const title: string = line.match(/^(.*?)\smap:/)
      ? line.match(/^(.*?)\smap:/)[1]
      : null;
    if (title) {
      let nextIndex = i + 1;
      let maps: Map[] = [];
      while (lines[nextIndex] && lines[nextIndex] !== '') {
        maps.push({
          destination: parseInt(lines[nextIndex].split(' ')[0]),
          source: parseInt(lines[nextIndex].split(' ')[1]),
          range: parseInt(lines[nextIndex].split(' ')[2]),
        });
        nextIndex++;
      }
      almanac[title] = maps;
    }
  });
  return almanac;
}

export function isInRange(source: number, map: Map) {
  return map.source <= source && source < map.source + map.range;
}

export function sourceToDestination(
  almanac: Almanac,
  source: number,
  key: string
): number {
  const toSearch: Map[] = almanac[key];

  for (const map of toSearch) {
    if (isInRange(source, map)) {
      return map.destination + (source - map.source);
    }
  }

  return source;
}

export function generateConsecutiveNumbers(start: number, amount: number) {
  const numbers = [];
  for (let i = 0; i < amount; i++) {
    numbers.push(start + i);
  }
  return numbers;
}
