import { test as it } from 'tap'
import pipeline from './stringPipeline'

it('should export a function.', t => {
    t.plan(1)
    t.type(pipeline, 'function')
})

it('should handle any iterables.', t => {
    t.plan(1)

    const expected = 'foo is great'.split(' ').join('')
    const itr = 'foo is great'.split(' ')

    const result = pipeline(itr)
    t.equal(result, expected)
})

it('should ignore empty strings.', t => {
    t.plan(1)

    const itr = <string[]> ['', '']
    const result = pipeline(itr)
    t.same(result, '')
})
