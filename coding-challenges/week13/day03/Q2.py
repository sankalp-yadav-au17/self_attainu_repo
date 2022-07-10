'''
Q-2 ) Tiling a Rectangle with the Fewest Squares - Solve with DP
(5 marks)
(Easy-since we solved it in recursion topic)
https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/
Given a rectangle of size n x m, find the minimum number of integer-sided
squares that tile the rectangle.
Example 1:
Input: n = 2, m = 3
Output: 3
Explanation: 3 squares are necessary to cover the rectangle.
2 (squares of 1x1)
1 (square of 2x2)
Example 2:
Input: n = 5,'''


def tiling(l,b):
    if l<0 or b<0:
        return 0
    if l==0 and b==0:
        return 1
    min=min(l,b)
    ans=tiling(l-m-)

n=2
m=3
tiling(n,m)