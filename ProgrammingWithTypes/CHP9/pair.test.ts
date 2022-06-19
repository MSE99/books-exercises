import { test } from 'tap'
import { Pair } from './pair'

const it = test

it('should export a constructor function.', t => {
    t.plan(1)
    t.type(Pair, 'function')
})

it('should except any two types.', t => {
    t.plan(2)

    const carName = 'Hyundai elenatra'
    const carPrice = 17000

    const p = new Pair(carName, carPrice)

    t.equal(p.first, carName)
    t.equal(p.second, carPrice)
})
