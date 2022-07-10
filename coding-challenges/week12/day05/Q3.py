'''Q-3 ) Binary Tree Tilt
(5 marks)
https://leetcode.com/problems/binary-tree-tilt/
(Easy)
Given the root of a binary tree, return the sum of every tree node's tilt.
The tilt of a tree node is the absolute difference between the sum of all left
subtree node values and all right subtree node values. If a node does not have a
left child, then the sum of the left subtree node values is treated as 0. The rule is
similar if there the node does not have a right child.
Example 1:Input: root = [1,2,3]
Output: 1
Explanation:
Tilt of node 2 : |0-0| = 0 (no children)
Tilt of node 3 : |0-0| = 0 (no children)
Tilt of node 1 : |2-3| = 1 (left subtree is just left child, so sum is 2; right
subtree is just right child, so sum is 3)
Sum of every tilt : 0 + 0 + 1 = 1
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None

def man(root):
    if root is None:
        return 
    
    root.val=root.left.val - root.right.val
    man(root.left)
    man(root.right)

root=Node(1)
root.left=Node(2)
root.right=Node(3)
man(root)