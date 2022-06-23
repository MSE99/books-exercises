import { filter, reduce } from './helpers'


function pipeline (itr: Iterable<string>): string {
    const filtered = filter(itr, str => str.length > 0)
    
    return reduce(
        filtered,
        (acc, val) => acc + val,
        ''
    )
}

export default pipeline
