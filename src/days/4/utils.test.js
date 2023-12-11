import { expect, test } from 'vitest';
import { linesToCards } from './utils';

test('should convert lines to cards', () => {
    const lines = ["Card 10:  1 48 83 86 17 | 83 86 6 31 17 9 48 53"]

    expect(linesToCards(lines)).toStrictEqual([
        {
            cardNumber: 10,
            winningNumbers: [1, 48, 83, 86, 17],
            numbersOnCard: [83, 86, 6, 31, 17, 9, 48, 53],
        }
    ])
})