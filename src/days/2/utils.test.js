import { expect, test } from 'vitest'
import { lineToObj } from './utils';


test('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', () => {
    expect(lineToObj("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")).toStrictEqual({ game: 1, blue: [3, 6] })
})

