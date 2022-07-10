'''
Q-1 ) write a program to take input a Binary tree and tell if that binary tree is
balanced or not?
https://leetcode.com/problems/balanced-binary-tree/
(5 marks)
(Easy)
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by
no more than 1.
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true
height of left
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None


        
def height(root):
    if root is None:
        return 0 
    return max(height(root.left),height(root.right))+1

def man(root):
    if root is None:
        return True
    if man(root.left) is False or man(root.right) is False:
        return False
    x=height(root.left)
    y=height(root.right)
    if abs(x-y)<=1:
        return True
    else:
        return False
    

        

root=Node(3)
root.left=Node(9)
root.right=Node(20)
root.right.right=Node(7)
root.right.left=Node(15)
print(man(root))


