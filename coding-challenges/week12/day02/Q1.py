'''
Q-1 ) Print vertical order traversal, or Top view of a binary tree
https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
(5 marks)
(Easy)
Given the root of a binary tree, calculate the vertical order traversal of the binary
tree.
For each node at position (row, col), its left and right children will be at positions
(row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0,
0).
The vertical order traversal of a binary tree is a list of top-to-bottom orderings for
each column index starting from the leftmost column and ending on the rightmost
column. There may be multiple nodes in the same row and same column. In such
a case, sort these nodes by their values.
Return the vertical order traversal of the binary tree.
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None

def man(root,a):
    global dict
    
    if root is None:
        return

    if a in dict:
        dict[a].append(root.val)
    else:
        dict[a]=[root.val]
    
    man(root.left,a-1)
    man(root.right,a+1)
    
def printLL():
    A=[]
    # dict.sort(key=lambda x:x [0])
    for key,value in sorted(dict.items()):
        A.append(dict[key])
    print(A)

dict={}
a=0
root=Node(3)
root.left=Node(9)
root.right=Node(20)
root.right.right=Node(7)
root.right.left=Node(15)
man(root,a)
printLL()