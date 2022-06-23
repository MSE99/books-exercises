
export function *filter <T> (itr: Iterable<T>, predicate: (arg0: T) => boolean): IterableIterator<T> {
    for (const item of itr) {
        if (predicate(item)) {
            yield item
        }
    }
}

export function reduce<T,V> (itr: Iterable<T>, next: (arg0: V, arg1: T) => V, initial: V): V {
    let result = initial
    for (const item of itr) {
        result = next(result, item)
    }
    return result
}
