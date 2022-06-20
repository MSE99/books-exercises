import { test } from 'tap'
import { BinaryTree } from './binaryTree'

const it = test

it('should export a constructor.', t => {
    t.plan(1)
    t.type(BinaryTree, 'function')
})

it('should support inserting a node immediately after construction.', t => {
    t.plan(1)
    const tree = new BinaryTree<string>('foo')
    t.equal(tree.val, 'foo')
})

it('should implement iterator protocol.', t => {
    t.plan(1)
    
    const tree = new BinaryTree<string>('foo')
    t.type((tree as any)[Symbol.iterator], 'function')
})

it('iterator should traverse tree pre order (center, left, right).', t => {
    t.plan(1)

    const expected = [1, 2, 3]

    const tree = new BinaryTree<number>(1)
    tree.left = new BinaryTree(2)
    tree.right = new BinaryTree(3)

    const result = [...tree]

    t.same(result, expected)
})

it('iterator should properly traverse the whole tree pre-order.', t => {
    t.plan(1)

    const expected = [1, 2, 3, 4, 5, 6, 7]

    const tree = new BinaryTree<number>(1)
    tree.left = new BinaryTree(2)
    tree.left.left = new BinaryTree(3)
    tree.left.right = new BinaryTree(4)

    tree.right = new BinaryTree(5)
    tree.right.left = new BinaryTree(6)
    tree.right.right = new BinaryTree(7)

    const result = [...tree]

    t.same(result, expected)
})
