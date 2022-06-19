import { test } from 'tap'
import { Stack } from './stack'

const it = test

it('should export a constructor function.', t => {
    t.plan(1)
    t.type(Stack, 'function')
})

it('stack should support pushing items.', t => {
    t.plan(1)

    const st = new Stack<number>()
    
    st.push(10)
    st.push(20)
    st.push(30)
    st.push(40)

    t.same((st as any).store, [10, 20, 30, 40])
})

it('stack should support popping items after pushing.', t => {
    t.plan(1)

    const st = new Stack<string>()

    st.push('foo')
    st.push('bar')
    st.push('baz')

    st.pop()

    t.same((st as any).store, ['foo', 'bar'])
})

it('stack should support peeking.', t => {
    t.plan(3)

    const st = new Stack<string>()

    st.push('foo')
    st.push('bar')
    st.push('baz')

    t.equal(st.peek(0), 'foo')
    t.equal(st.peek(1), 'bar')
    t.equal(st.peek(2), 'baz')
})

it('pop on empty should be harmless.', t => {
    t.plan(1)

    const st = new Stack<boolean>()

    st.pop()
    st.push(true)

    t.equal(st.peek(0), true)
})
