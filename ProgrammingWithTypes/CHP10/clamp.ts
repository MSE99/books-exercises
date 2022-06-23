
export enum CmpResult { Equal, SmallerThan, BiggerThan }

export interface IComparable<T> {
    comp(right: T): CmpResult 
}

export default function clamp<T extends IComparable<T>> (val: T, start: T, end: T) {
    const startCmpResult = val.comp(start)
    const rightOK = startCmpResult === CmpResult.Equal || startCmpResult === CmpResult.BiggerThan
    
    const endCmpResult = val.comp(end)
    const leftOK = endCmpResult === CmpResult.Equal || endCmpResult === CmpResult.SmallerThan
    
    return rightOK && leftOK
}
