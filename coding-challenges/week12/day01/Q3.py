'''
Q-3 ) Kth Smallest Element in a BST
(5 marks)
https://leetcode.com/problems/kth-smallest-element-in-a-bst/
(Medium)
Given the root of a binary search tree, and an integer k, return the kth
(1-indexed) smallest element in the tree.
Example 1:
Input: root = [3,1,4,null,2], k = 1
Output: 1
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None

def man(root):
    global a

    if root is None :
        return
    a.append(root.val)
    man(root.right)
    man(root.left)

def kth_element(a,k):
    a.sort()
    print(a[k-1])

a=[]
k=int(input("target="))
root=Node(3)
root.left=Node(1)
root.right=Node(4)
root.left.right=Node(2)
man(root)
kth_element(a,k)