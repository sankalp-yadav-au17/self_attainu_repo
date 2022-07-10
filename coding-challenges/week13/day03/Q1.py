'''
Q-1 ) Maximum path sum in matrix - solve with DP
https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1
(5 marks)
(Medium)
Given a NxN matrix of positive integers. There are only three possible moves
from a cell Matrix[r][c].
1. Matrix [r+1] [c]
2. Matrix [r+1] [c-1]
3. Matrix [r+1] [c+1]
Starting from any column in row 0 return the largest sum of any of the paths up to
row N-1.
Example 1:
Input: N = 2
Matrix = {{348, 391},
{618, 193}}
Output: 1009
Explaination: The best path is 39'''


def maximumPath(matrix,N,p1,p2,x):
    if p1>=N or p2>=N:
        return 0

    x+=matrix[p1][p2]
    return max(x,maximumPath(matrix,N,p1+1,p2,x),maximumPath(matrix,N,p1+1,p2-1,x),maximumPath(matrix,N,p1+1,p2+1,x)) 
    

x=0
matrix=[[2, 2],
          [2, 2]]
N=2
p1,p2=0,N-1
dp = [[None for i in range(N)]for i in range(N)]
print(maximumPath(matrix,N,p1,p2,x))
