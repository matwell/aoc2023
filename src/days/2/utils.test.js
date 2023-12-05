import { expect, test } from 'vitest'
import { lineToObj, validGame, maximizedGame } from './utils';


test('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', () => {
    expect(lineToObj("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")).toStrictEqual({ game: 1, blue: [3, 6], red: [4, 1], green: [2, 2] })
})

test('Should be valid', () => {
    expect(validGame({ game: 1, blue: [3, 6], red: [4, 1], green: [2, 2] }, 5, 2, 7)).toBe(true)
})

test('Should not be valid', () => {
    expect(validGame({ game: 1, blue: [3, 6], red: [4, 1], green: [2, 2] }, 1, 2, 3)).toBe(false)
})

test("Maximized game", () => {
    expect(maximizedGame({ game: 1, red: [4, 1], green: [2, 2], blue: [3, 6] })).toStrictEqual({ blue: 6, green: 2, red: 4 })
})