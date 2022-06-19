import { test } from 'tap'
import { backwards } from './backwards'

const it = test

it('should export a function.', t => {
    t.plan(1)
    t.type(backwards, 'function')
})

it('should iterate backwards over an array.', t => {
    t.plan(1)

    const expected = [5, 4, 3, 2, 1]
    const input = [1, 2, 3, 4, 5]

    const itr = backwards(input)
    const result = [...itr]

    t.same(result, expected)
})

it('should handle one element arr.', t => {
    t.plan(1)

    const expected = [5]

    const itr = backwards([5])
    const result = [...itr]

    t.same(result, expected)
})


it('should handle empty arr.', t => {
    t.plan(1)

    const expected = <number[]> []

    const itr = backwards([])
    const result = [...itr]

    t.same(result, expected)
})
