import { test as it } from 'tap'
import { functor } from './readerFunctor' 

it('should export a function.', t => {
    t.plan(1)
    t.type(functor, 'function')
})

it('should return an IReader<string> from an IReader<number>.', t => {
    t.plan(1)

    function input (val: string): number {
        return Number(val)
    }

    const reader = functor(input)
    t.equal(reader({ read: () => '12' }).read(), 12)
})
