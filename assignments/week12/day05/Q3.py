'''Q-3) Same Tree (5 marks)
https://leetcode.com/problems/same-tree/
Given the roots of two binary trees p and q, write a function to check if they
are the same or not.
Two binary trees are considered the same if they are structurally identical,
and the nodes have the same value.
Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: trueExample 2:
Input: p = [1,2], q = [1,null,2]
Output: false'''

class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None

def man(p,q):
    if p is None and q is None:
        return True
    if p is None or q is None :
        return False
    if p.val!=q.val:
        return False
    x=man(p.left,q.left)
    y=man(p.right,q.right)
    return x and y

p=Node(1)
p.left=Node(2)
p.right=Node(3)
q=Node(1)
q.left=Node(2)
q.right=Node(3)
print(man(p,q))
