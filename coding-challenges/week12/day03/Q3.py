'''
Q - 3) Merge Two Binary Trees
https://leetcode.com/problems/merge-two-binary-trees/
(5 marks)
(Easy)
You are given two binary trees root1 and root2.
Imagine that when you put one of them to cover the other, some nodes of the two
trees are overlapped while the others are not. You need to merge the two trees
into a new binary tree. The merge rule is that if two nodes overlap, then sum
node values up as the new value of the merged node. Otherwise, the NOT null
node will be used as the node of the new tree.
Return the merged tree.
Note: The merging process must start from the root nodes of both trees.
Example 1:
Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7]Example 2:
Input: root1 = [1], root2 = [1,2]
Output: [2,2]
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.right=None
        self.left=None

def man(root1=None,root2=None):
    if root1 is None or root2 is None:
        return root1 or root2
    root3=Node(root1.val+root2.val)
    root3.left=man(root1.left,root2.left)
    root3.right=man(root1.right,root2.right)
    return root3.val

root1=Node(1)
root1.left=Node(3)
root1.right=Node(2)
root1.left.left=Node(5)

root2=Node(2)
root2.right=Node(3)
root2.left=Node(1)
root2.left.right=Node(4)
root2.right.right=Node(7)
print(man(root1,root2))