'''
Q-2 )Sum of Root To Leaf Binary Numbers
(5 marks)
https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
(Easy)You are given the root of a binary tree where each node has a value 0 or 1. Each
root-to-leaf path represents a binary number starting with the most significant bit.
For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in
binary, which is 13.
For all leaves in the tree, consider the numbers represented by the path from the
root to that leaf.
Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits
integer.
Example 1:
Input: root = [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None

def man(root,sum=0):

    if root is None:
        return

    sum=sum*2+root.val
    if root.left or root.right:  
        x=man(root.left,sum)
        y=man(root.right,sum)
        return x+y
    if root.left==None and root.right==None:
        return sum

root=Node(1)
root.left=Node(0)
root.right=Node(1)
root.left.left=Node(0)
root.left.right=Node(1)
root.right.right=Node(1)
root.right.left=Node(0)
sum=0
print(man(root,sum))