'''
Q-2 ) Binary Search Tree to Greater Sum Tree
(5 marks)
https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
(Easy)
Given the root of a Binary Search Tree (BST), convert it to a Greater Tree
such that every key of the original BST is changed to the original key plus
sum of all keys greater than the original key in BST.
As a reminder, a binary search tree is a tree that satisfies these constraints:● The left subtree of a node contains only nodes with keys less than
the node's key.
● The right subtree of a node contains only nodes with keys greater
than the node's key.
● Both the left and right subtrees must also be binary search trees.
Note: This question is the same as 538:
https://leetcode.com/problems/convert-bst-to-greater-tree/
'''

# class Node:
#     def __init__(self,x):
#         self.val=x
#         self.left=None
#         self.right=None
# add=0
# def Sum(root):
#     global add
#     if root is None:
#         return 
#     add+=root.val 
#     Sum(root.left)
#     Sum(root.right)
#     # return add

# def man(a,root):
#     global add
#     if root is None :
#         return
#     Sum(root.right)
#     man(a,root.right)
#     root.val+=add+a
#     a=root.val
#     add=0
#     man(root.val,root.left)
#     add=0
#     a=0
    

# a=0
# root=Node(4)
# root.left=Node(1)
# root.left.left=Node(0)
# root.left.right=Node(2)
# root.left.right.right=Node(3)


# root.right=Node(6)
# root.right.right=Node(7)
# root.right.left=Node(5)
# root.right.right.right=Node(8)
# man(a,root)


class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None


def man(root):
    global a
    if root is None :
        return

    man(root.right)
    root.val=root.val+a
    a=root.val
    man(root.left)

def printtree(root):
    if root is None :
        return
    print(root.val)
    printtree(root.left)
    printtree(root.right)
    

a=0
root=Node(4)
root.left=Node(1)
root.left.left=Node(0)
root.left.right=Node(2)
root.left.right.right=Node(3)


root.right=Node(6)
root.right.right=Node(7)
root.right.left=Node(5)
root.right.right.right=Node(8)
man(root)
printtree(root)


