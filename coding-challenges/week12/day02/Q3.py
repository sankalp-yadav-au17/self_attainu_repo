'''
Q-3 )Increasing Order Search Tree
(5 marks)
https://leetcode.com/problems/increasing-order-search-tree/
(Easy)Given the root of a binary search tree, rearrange the tree in in-order so that the
leftmost node in the tree is now the root of the tree, and every node has no left
child and only one right child.
Example 1:
Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,nu
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None
A=[]
def man(root):
    global A
    if root is None:
        return
    A.append(root.val)
    man(root.left)
    man(root.right)

def printLL():
    global A
    A.sort()
    cur=root=Node(A[0])
    for i in range(1,len(A)):
        root.right=Node(A[i])
        root=root.right
    return cur

root=Node(5)
root.left=Node(3)
root.right=Node(6)
root.left.left=Node(2)
root.left.right=Node(4)
root.left.left.left=Node(1)
root.right.right=Node(8)
root.right.right.right=Node(9)
root.right.right.left=Node(7)
man(root)
printLL() 