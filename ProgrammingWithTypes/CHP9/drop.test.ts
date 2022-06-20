import { test } from 'tap'
import { drop, take } from './drop'

const it = test

it('should export a function.', t => {
    t.plan(1)
    t.type(drop, 'function')
})

it('should take an iterator as arg and return a new iterator.', t => {
    t.plan(1)
    
    const expected = [5]
    const iterable = [1, 2, 3, 4, 5]
    const itr = drop(iterable, 4)

    const result = [...itr]
    t.same(result, expected)
})

it('exercise (2) 9.4.2', t => {
    t.plan(1)

    const expected = [6, 7, 8, 9, 10]

    const items = []
    for (let i = 0; i < 25; i++) items.push(i + 1)

    const droppedItr = drop(items, 5)
    const takenItr = take(droppedItr, 5)

    const result = [...takenItr]

    t.same(result, expected)
})
