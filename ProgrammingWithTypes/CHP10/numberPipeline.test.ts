import { test as it } from 'tap'
import pipeline from './numberPipeline.ts'

it('should export a pipeline function.', t => {
    t.plan(1)
    t.type(pipeline, 'function')
})

it('should return odd numbers from 1 to 5.', t => {
    t.plan(1)
    const expected = [1, 3, 5]
    const result = pipeline([1, 2, 3, 4, 5])
    t.same(result, expected)
})
