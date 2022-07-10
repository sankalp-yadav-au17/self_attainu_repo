'''
Q-3) N-ary Tree Preorder Traversal
https://leetcode.com/problems/n-ary-tree-preorder-traversal/
(5 marks)
Given the root of an n-ary tree, return the preorder traversal of its nodes'
values.
pay attention, n is not defined. Write a code that can traverse a tree for any
value of “n” in “n-ary”.
Example 1:
'''


A=[]  
def pre(root):
    
    if root:
        A.append(root.val)
        for child in root.children:
            pre(child)



root = [1,null,3,2,4,null,5,6]
print(pre(root))
