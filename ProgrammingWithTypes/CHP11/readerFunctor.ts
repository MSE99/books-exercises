
export interface IReader<T> {
    read(): T
}

export function functor<T, U>(fn: (val: T) => U) {
    return (x: IReader<T>) => {
        const val = x.read()
        return <IReader<U>> {
            read: () => fn(val)
        }
    }
}
