'''Q-3 ) Top K Frequent Elements
(5 marks)
https://leetcode.com/problems/top-k-frequent-elements/
(5 marks)
(Medium)
Given an integer array nums and an integer k, return the k most frequent
elements. You may return the answer in any order.
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:
Input: nums = [1], k = 1
Output: [1]
'''

class Node:
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None

def man(root,dict):
    if root is None:
        return 
    dict[root.val]=1+dict.get(root.val,0)
    man(root.left,dict)
    man(root.right,dict)

dict={}
root=Node(1)
root.left=Node(1)
root.right=Node(1)
root.left.left=Node(2)
root.left.right=Node(2)
root.right.left=Node(3)
k=2
man(root,dict)
A=[]
for key,value in dict.items():
    if value >=k:
        A.append(key)
print(A)