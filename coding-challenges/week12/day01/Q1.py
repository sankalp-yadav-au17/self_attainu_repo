'''
Q-1 ) Write a program to print nodes in a BST having odd values:
(Easy)
(5 marks)
Input:
Sample output:
3
1
7
13
'''


class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None

def man(root):
    if root is None:
        return
    if root.val%2==1:
        print(root.val)
    man(root.left)
    man(root.right)

root=Node(8)
root.left=Node(3)
root.right=Node(10)
root.left.left=Node(1)
root.left.right=Node(6)
root.left.right.left=Node(4)
root.left.right.right=Node(7)
root.right.right=Node(14)
root.right.right.left=Node(13)
man(root)