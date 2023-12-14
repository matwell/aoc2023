import { test, expect } from "vitest";
import { isInRange, sourceToDestination } from './utils';

test('isInRange - source is within range', () => {
    const map = { source: 5, range: 10 };
    expect(isInRange(7, map)).toBe(true);
});

test('isInRange - source is at the lower bound', () => {
    const map = { source: 5, range: 10, destination: 5 };
    expect(isInRange(5, map)).toBe(true);
});

test('isInRange - source is at the upper bound', () => {
    const map = { source: 5, range: 10 };
    expect(isInRange(15, map)).toBe(false);
});

test('isInRange - source is outside the range', () => {
    const map = { source: 5, range: 10 };
    expect(isInRange(20, map)).toBe(false);
});


test('sourceToDestination - source is within range', () => {
    const almanac = {
        key: [
            { source: 1, range: 10, destination: 5 },
            { source: 15, range: 5, destination: 6 },
        ]
    };
    const source = 5;
    const key = 'key';
    expect(sourceToDestination(almanac, source, key)).toBe(9);
});

test('sourceToDestination - source is outside the range', () => {
    const almanac = {
        key: [
            { source: 1, range: 10, destination: "A" },
            { source: 15, range: 5, destination: "B" },
        ]
    };
    const source = 20;
    const key = 'key';
    expect(sourceToDestination(almanac, source, key)).toBe(source);
});
