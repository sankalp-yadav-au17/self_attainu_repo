'''
Q-3 ) Binary Tree Zigzag Level Order Traversal (5 marks)
https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
(Medium)
Given the root of a binary tree, return the zigzag level order traversal of its nodes'
values. (i.e., from left to right, then right to left for the next level and alternate
between).
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:
Input: root = [1]
Output: [[1]]'''

class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None

def height(root):
    if root is None:
        return 0
    if root.left is None and root.right is None:
        return 1
    le=height(root.left) 
    ri=height(root.right)
    return max(le,ri) + 1

def printnodes(root,l):
    if root is None:
        return 
    if l==1:
        print(root)
    printnodes(root.left,l-1)
    printnodes(root.right,l-1)

def addsab(root):
    for i in 



root=Node(3)
root.left=Node(9)
root.right=Node(20)
root.right.left=Node(15)
root.right.left=Node(7)
print(height(root))


# def zigzagLevelOrder(root):
    
#     if not root: return []
    
#     ans = []
#     level = [root]
    
#     while level:
#         mid = [node.val for node in level]
        
#         if len(ans)%2 == 0:
#             ans.append(mid)
#         else:
#             ans.append(mid[::-1])
        
#         level = [child for node in level for child in (node.left, node.right) if child]
    
#     return ans

# root.left=Node(9)
# root.right=Node(20)
# root.right.left=Node(15)
# root.right.left=Node(7)
# print(zigzagLevelOrder(root))