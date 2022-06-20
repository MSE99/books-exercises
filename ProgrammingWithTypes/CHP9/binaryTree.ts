
export class BinaryTree<T> {
    val: T
    right?: BinaryTree<T>
    left?: BinaryTree<T>
    
    constructor (val: T) {
        this.val = val
    }

    *[Symbol.iterator](): IterableIterator<T> {
        yield this.val

        if (this.left) {
            for (const val of this.left) {
                yield val
            }
        }

        if (this.right) {
            for (const val of this.right) {
                yield val
            }
        }
    }
}
