import { expect, test } from 'vitest';
import { linesToCards, calculatePoints } from './utils';

test('should convert lines to cards', () => {
    const lines = ["Card 10:  1 48 83 86 17 | 83 86 6 31 17 9 48 53"]

    expect(linesToCards(lines)).toStrictEqual([
        {
            cardNumber: 10,
            winningNumbers: [1, 48, 83, 86, 17],
            numbersOnCard: [83, 86, 6, 31, 17, 9, 48, 53],
            points: 8
        }
    ])
})

test('should convert lines to cards - longer', () => {
    const lines = ["Card 207: 52 14 61 69 16 53  1 34  9 77 | 52 59 75 39 60 40 38 74 95 97 46 80 19 28 64 66 57 37 41 90  7 62 32 58  4"]

    expect(linesToCards(lines)).toStrictEqual([
        {
            cardNumber: 207,
            winningNumbers: [52, 14, 61, 69, 16, 53, 1, 34, 9, 77],
            numbersOnCard: [52, 59, 75, 39, 60, 40, 38, 74, 95, 97, 46, 80, 19, 28, 64, 66, 57, 37, 41, 90, 7, 62, 32, 58, 4],
            points: 1
        }
    ])
})

test('Calculate points', () => {
    expect(calculatePoints([1, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53])).toBe(8)
})