import { expect, test } from 'vitest'
import { findAllNumbers, extractNumbers, convertToGrid, findAllStars, findNeighboursOfNumber, containsSymbol, sumAllPartNumbers, findWholeNumber, findSurroundingNumbers } from './utils';

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
})

test('Extract numbers', () => {
    expect(extractNumbers(['1', '2', '.'])).toStrictEqual(['12'])
})
test('Extract numbers when there are none', () => {
    expect(extractNumbers(['.', '.', '.'])).toStrictEqual(null)
})

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

test('find numbers with duplicate', () => {
    expect(findAllNumbers([
        ['1', '2', '.', '1'],
        ['.', '5', '6', '.'],
        ['7', '.', '9', '.'],
    ])).toStrictEqual([
        { number: 12, row: 0, column: 0 },
        { number: 1, row: 0, column: 3 },
        { number: 56, row: 1, column: 1 },
        { number: 7, row: 2, column: 0 },
        { number: 9, row: 2, column: 2 },

    ])
})

test('find numbers with duplicate 2', () => {
    expect(findAllNumbers([['7', '.', '7', '7', '.', '7', '7', '7']])).toStrictEqual([
        { number: 7, row: 0, column: 0 },
        { number: 77, row: 0, column: 2 },
        { number: 777, row: 0, column: 5 },
    ])
})

test('Find neighbours', () => {
    expect(findNeighboursOfNumber({ number: 5, row: 1, column: 1 }, [
        ['1', '2', '.'],
        ['.', '5', '*'],
        ['7', '.', '9'],
    ])).toStrictEqual(['1', '2', '.', '7', '.', '9', '.', '*'])
})

test('Find neighbours 2', () => {
    expect(findNeighboursOfNumber({ number: 12, row: 0, column: 0 }, [
        ['1', '2', '.'],
        ['.', '5', '6'],
        ['7', '.', '9'],
    ])).toStrictEqual(['.', '5', '6', '.'])
})

test('Find neighbours 3', () => {
    expect(findNeighboursOfNumber({ number: 9, row: 2, column: 2 }, [
        ['1', '2', '.'],
        ['.', '5', '6'],
        ['7', '.', '9'],
    ])).toStrictEqual(['5', '6', '.'])
})

test('Contains symbol', () => {
    expect(containsSymbol(['1', '2', '#'])).toBe(true)
})


test('Doesnt contain symbol', () => {
    expect(containsSymbol(['1', '2', '.'])).toBe(false)
})

test('Sum all part numbers', () => {
    expect(sumAllPartNumbers([
        { number: 12, row: 0, column: 0 },
        { number: 56, row: 1, column: 1 },
        { number: 7, row: 2, column: 0 },
        { number: 9, row: 2, column: 2 },
    ])).toBe(84)
})

test('Find all stars in the grid', () => {
    const grid = [
        ['*', '.', '*'],
        ['*', '*', '*'],
        ['.', '*', '.'],
    ];

    expect(findAllStars(grid)).toEqual([
        { row: 0, column: 0 },
        { row: 0, column: 2 },
        { row: 1, column: 0 },
        { row: 1, column: 1 },
        { row: 1, column: 2 },
        { row: 2, column: 1 },
    ]);
});

test('No stars in the grid', () => {
    const grid = [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.'],
    ];

    expect(findAllStars(grid)).toEqual([]);
});

test('findWholeNumber - case 1', () => {
    const grid = [
        ['1', '2', '3', '.'],
        ['.', '7', '8', '9'],
        ['6', '.', '0', '1'],
        ['2', '3', '4', '5'],
    ];
    const row = 0;
    const column = 1;
    const result = findWholeNumber(row, column, grid);
    expect(result).toEqual(123);
});

test('findWholeNumber - case 2', () => {
    const grid = [
        ['1', '.', '3', '4'],
        ['6', '7', '8', '9'],
        ['.', '.', '0', '1'],
        ['2', '3', '4', '5'],
    ];
    const row = 2;
    const column = 2;
    expect(grid[row][column]).toEqual('0')
    const result = findWholeNumber(row, column, grid);
    expect(result).toEqual(1);
});

test('findWholeNumber - case 3', () => {
    const grid = [
        ['1', '2', '3', '4'],
        ['6', '7', '8', '.'],
        ['9', '.', '0', '1'],
        ['2', '3', '4', '5'],
    ];
    const row = 3;
    const column = 3;
    const result = findWholeNumber(row, column, grid);
    expect(result).toEqual(2345);
});


test('findSurroundingNumbers', () => {
    const grid = [
        ['1', '2', '3', '4'],
        ['5', '.', '7', '8'],
        ['9', '0', '*', '2'],
        ['3', '4', '5', '.'],
    ];

    const location = { row: 2, column: 2 };
    const result = findSurroundingNumbers(location, grid);
    expect(result).toEqual([78, 345, 90, 2]);

});

test('findSurroundingNumbers 2', () => {
    const grid = [
        ['1', '2', '3', '4'],
        ['5', '.', '7', '8'],
        ['9', '.', '*', '2'],
        ['3', '4', '5', '.'],
    ];

    const location = { row: 2, column: 2 };
    const result = findSurroundingNumbers(location, grid);
    expect(result).toEqual([78, 345, 2]);

});