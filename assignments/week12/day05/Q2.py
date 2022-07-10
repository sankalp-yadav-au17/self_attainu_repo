'''Q-2 ) Lowest Common Ancestor of a Binary Search Tree
marks)
(5
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search
-tree/
(Easy)
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes in the BST.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is
defined between two nodes p and q as the lowest node in T that has both p and
q as descendants (where we allow a node to be a descendant of itself).”
Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6Explanation: The LCA of nodes 2 and 8 is 6.'''

class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None

def man(root,p,q):
    if root is None:
        return 
    if root.val>p and root.val>q:
        man(root.left,p,q)
    elif root.val<p and root.val<q:
        man(root.right,p,q)
    else:
        return root.val


root=Node(6)
root.left=Node(2)
root.right=Node(8)
root.left.left=Node(0)
root.left.right=Node(4)
root.right.left=Node(7)
root.right.right=Node(9)
root.left.right.left=Node(3)
root.left.right.right=Node(5)
p,q=2,4
print(man(root,p,q))