'''
Q-2 ) Pascal's Triangle II
(5 marks)
https://leetcode.com/problems/pascals-triangle-ii/
(Easy)
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's
triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it
as shown:Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:
Input: rowIndex = 0
Output: [1]'''


rowIndex=int(input("Enter the list = "))
Output=[]
temp=[]
for i in range(1,rowIndex+2):
    if i == 1:
        temp.append(i)
        Output.append(temp)
        temp=[]
        print(temp)
        print(Output)
    else:
        sum=0
        p1=0
        temp.append(Output[-1][p1])
        p2=1
        while p1<p2 and p2<len(Output[-1]):
            temp.append(Output[-1][p1] + Output[-1][p2])
            p1+=1
            p2+=1
        temp.append(1)
        Output.append(temp)
        temp=[]
        print(temp)
        print(Output[-1])