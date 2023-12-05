import { expect, test } from 'vitest'
import { findAllNumbers.convertToGrid } from './utils';

test('Convert to grid', () => {
    expect(convertToGrid([
        '12.',
        '.56',
        '7.9'
    ])).toStrictEqual([
        ['1', '2', '.'],
        ['.', '5', '6'],
        ['7', '.', '9'],
    ])
}),

    test('find numbers', () => {
        expect(findAllNumbers([
            ['1', '2', '.'],
            ['.', '5', '6'],
            ['7', '.', '9'],
        ])).toStrictEqual([
            { number: 12, row: 0, column: 0 },
            { number: 56, row: 1, column: 1 },
            { number: 7, row: 2, column: 0 },
            { number: 9, row: 2, column: 2 },

        ])
    })