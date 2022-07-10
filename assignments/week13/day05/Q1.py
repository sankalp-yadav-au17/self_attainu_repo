'''
Q-3 ) Pascal's Triangle
(5 marks)
https://leetcode.com/problems/pascals-triangle/
(5 marks)
(Easy)
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it
as shown:
Example 1:
Input: numRows = 5Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:
Input: numRows = 1
Output: [[1]]'''


numrows=int(input("Enter the list = "))
Output=[]
temp=[]
for i in range(1,numrows+1):
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
        print(Output)
