'''
Q-3 ) Build an Array With Stack Operations
(5 marks)
https://leetcode.com/problems/build-an-array-with-stack-operations/
(Medium)
Given an array target and an integer n. In each iteration, you will read a number
from list = {1,2,3..., n}.
Build the target array using the following operations:
● Push: Read a new element from the beginning list, and push it in the array.
● Pop: delete the last element of the array.
● If the target array is already built, stop reading more elements.
Return the operations to build the target array. You are guaranteed that the
answer is unique.Example 1:
Input: target = [1,3], n = 3
Output: ["Push","Push","Pop","Push"]
Explanation:
Read number 1 and automatically push in the array -> [1]
Read number 2 and automatically push in the array then Pop it -> [1]
Read number 3 and automatically push in th
'''

target= list(map(int,input("Enter the list= ").split()))
n= int(input("Enter the ending number= "))
stack= []
A=[]
for i in range(1,n+1):
    if A==[] or target[len(target)-1]!=A[len(A)-1]:
        if i in target:
            stack.append("Push")
            A.append(i)
        else:
            stack.append("Push")
            stack.append("Pop")
    else:
        break
print(stack)