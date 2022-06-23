
export default class FluentIterable<T> {
    private itr: Iterable<T>

    constructor(itr: Iterable<T>) {
        this.itr = itr
    }

    map(fn: (_: T) => T): FluentIterable<T> {
        return new FluentIterable(this._map(fn))
    }

    private *_map(fn: (_: T) => T): Iterable<T>  {
        for (const item of this.itr) {
            yield fn(item)
        }
    }

    filter(pred: (_: T) => boolean): FluentIterable<T> {
        return new FluentIterable(this._filter(pred))
    }

    private *_filter(pred: (_: T) => boolean) {
        for (const item of this.itr) {
            if (pred(item)) {
                yield item
            }
        }
    }

    reduce<V>(agr: (_: V, __: T) => V, initial: V): V {
        let result = initial
        for (const item of this) {
            result = agr(result, item)
        }
        return result
    }

    take (count: number): FluentIterable<T> {
        return new FluentIterable(this._take(count))
    }

    private *_take(count: number) {
        let i = 0

        for (const item of this) {
            if (i >= count) {
                break
            }

            yield item
            i++
        }
    }

    drop(count: number): FluentIterable<T> {
        return new FluentIterable(this._drop(count))
    }

    private *_drop(count: number) {
        let i = 0

        for (const item of this) {
            if (i >= count) {
                yield item
            } else {
                i++
            }
        }
    }

    *[Symbol.iterator] () {
        for (const item of this.itr) {
            yield item
        }
    }
}
