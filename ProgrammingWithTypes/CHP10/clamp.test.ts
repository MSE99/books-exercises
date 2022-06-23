import { test as it } from 'tap'
import clamp, { CmpResult, IComparable } from './clamp'

it('should export a function.', t => {
    t.plan(1)
    t.type(clamp, 'function')
})

it('should return false if the val is not in the range.', t => {
    t.plan(1)

    class Temp implements IComparable<Temp> {
        private val: number

        constructor (val: number) {
            this.val = val
        }

        comp(right: Temp): CmpResult {
            if (right.val === this.val) {
                return CmpResult.Equal
            } else if (this.val > right.val) {
                return CmpResult.BiggerThan
            }

            return CmpResult.SmallerThan
        }
    }

    const result = clamp(new Temp(50), new Temp(0), new Temp(100))

    t.ok(result)
})
