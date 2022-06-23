import { test as it } from 'tap'
import FluentIterable from './fluentIterable'

it('should export a class.', t => {
    t.plan(1)
    t.type(FluentIterable, 'function')
})

it('should have a working `map` HOF.', t => {
    t.plan(1)

    const expectedOutput = [2, 4, 6]
    const input = [1, 2, 3]

    const itr = new FluentIterable(input)
    const result = [...itr.map(i => i * 2)]

    t.same(result, expectedOutput)
})

it('should have a working `filter` HOF.', t => {
    t.plan(1)

    const expectedOutput = [1]
    const input = [1, 2, 3]

    const itr = new FluentIterable(input)
    const result = [...itr.filter(i => i === 1)]

    t.same(result, expectedOutput)
})

it('should have a working `reduce` HOF.', t => {
    t.plan(1)

    const expectedOutput = 6
    const input = [1, 2, 3]

    const itr = new FluentIterable(input)
    t.equal(
        itr.reduce((acc, val) => acc + val, 0),
        6
    )
})

it('should have a working `take` iterator method.', t => {
    t.plan(1)

    const expectedOutput = [1, 2]
    const input = [1, 2, 3]

    const itr = new FluentIterable(input)
    const result = [...itr.take(2)]

    t.same(result, expectedOutput)
})

it('should have a working `drop` iterator method.', t => {
    t.plan(1)

    const expectedOutput = [2, 3]
    const input = [1, 2, 3]

    const itr = new FluentIterable(input)
    const result = [...itr.drop(1)]

    t.same(result, expectedOutput)
})
