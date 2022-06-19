
export class Stack<ItemKind> {
    private store: ItemKind[] = []

    push(item: ItemKind) {
        this.store.push(item)
    }

    pop() {
        this.store.pop()
    }

    peek(idx: number) {
        return this.store[idx]
    }
}
