'''
Q-3) Maximum Depth of Binary Tree(or height of a BT):
(5 marks)
https://leetcode.com/problems/maximum-depth-of-binary-tree/
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest
path from the root node down to the farthest leaf node.
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None

c=0
def man(root):
    global c
    if root==None:
        return 0
    if root.left== None and root.right==None:
        return 1
    L=man(root.left)
    R=man(root.right)
    return max(L,R) + 1



root=Node(3)
root.left=Node(9)
root.right=Node(20)
root.right.left=Node(15)
root.right.right=Node(7)
print(man(root))
