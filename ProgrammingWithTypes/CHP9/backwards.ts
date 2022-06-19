
/**
 * Exercise 9.3.2 solution
 */
export function* backwards<T> (arr: T[]): IterableIterator<T> {
    let i = arr.length - 1

    while (i >= 0) {
        yield arr[i]
        i--
    }
}
