'''Q-5) [BONUS QUESTION] Search a 2D Matrix
(3.75 marks)
(Medium)
https://leetcode.com/problems/search-a-2d-matrix/
Write an efficient algorithm that searches for a value in an m x n matrix.
This matrix has the following properties:
● Integers in each row are sorted from left to right.
● The first integer of each row is greater than the last integer of the
previous row.
Example 1:Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
'''

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 13
c=True
for i in matrix:
    if target in i:
        print(True)
        c=False
        break
if c==True:
    print(False)