import { reduce } from './helpers'

function pipeline(itr: Iterable<number>): number[] {
    return reduce<number, number[]>(
        itr,
        (acc, val) => val%2 > 0 ? [...acc, val]:acc,
        []
    )
}

export default pipeline
