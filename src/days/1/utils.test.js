import { expect, test } from 'vitest'
import { allIndexesOf, findNumbers } from './utils'

test('Search for one', () => {
    expect(allIndexesOf("one1two2", "one")).toStrictEqual([0])
})
test('Search for 1', () => {
    expect(allIndexesOf("one1two2", "1")).toStrictEqual([3])
})
test('Search for one', () => {
    expect(allIndexesOf("one1twone2", "one")).toStrictEqual([0, 6])
})

test('4nineeightseven2', () => {
    expect(findNumbers("4nineeightseven2")).toStrictEqual(["4", "2"])
})
test('7onesztpkqmjlfourhrrcf3threeone', () => {
    expect(findNumbers("7onesztpkqmjlfourhrrcf3threeone")).toStrictEqual(["7", "1"])
})