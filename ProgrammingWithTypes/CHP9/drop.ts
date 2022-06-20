
export function *drop<T>(itr: Iterable<T>, count: number) {
    let ignored = 0

    for (const item of itr) {
        if (ignored >= count) {
            yield item
        } else {
            ignored++
        }
    }
}

export function *take<T>(itr: Iterable<T>, count: number) {
    let taken = 0

    for (const item of itr) {
        if (taken >= count) {
            break
        }

        yield item
        taken++
    }
}
