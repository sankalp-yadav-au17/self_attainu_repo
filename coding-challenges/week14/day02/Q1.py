'''Q-1 ) N-Queens
https://leetcode.com/problems/n-queens-ii/
(5 marks)
(Medium)
The n-queens puzzle is the problem of placing n queens on an n x n chessboard
such that no two queens attack each other.
Given an integer n, return the number of distinct solutions to the n-queens
puzzle.
Example 1:
Input: n = 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
Example 2:
Input: n = 1
Output: 1
'''
def safe(row,col,chessboard):
        #check all attack range for queen at row, col
        
        
        #Diagonally right up
        r = row
        c = col
        
        while r>=0 and c<n:
            if chessboard[r][c]  == 'Q':
                return False
            r -= 1
            c += 1
            
            
        #Diagonally right down
        r = row
        c = col
        
        while r<n and c<n:
            if chessboard[r][c]  == 'Q':
                return False
            r += 1
            c += 1
        
        #Diagonally left up
        r = row
        c = col
        
        while r>=0 and c>=0:
            if chessboard[r][c]  == 'Q':
                return False
            r -= 1
            c -= 1
        
        #Diagonally left down
        r = row
        c = col
        
        while r<n and c>=0:
            if chessboard[r][c]  == 'Q':
                return False
            r += 1
            c -= 1
            
            
        #Horizontally left
        r = row
        c = col
        
        while c>=0:
            if chessboard[r][c]  == 'Q':
                return False
            c -= 1
        
        #Horizontally right
        r = row
        c = col
        
        while c<n:
            if chessboard[r][c]  == 'Q':
                return False
            c += 1
            
            
        #Vertically up
        r = row
        c = col
        
        while r>=0:
            if chessboard[r][c]  == 'Q':
                return False
            r -= 1
        
        #Vertically down
        r = row
        c = col
        
        while r<n:
            if chessboard[r][c]  == 'Q':
                return False
            r += 1
        
        return True
          
    
def solve(row,chessboard):
    if row == n:
        # print(chessboard)
        temp = []
        for row in chessboard:
            temp.append("".join(row))
        res.append(temp)
        return
    
    for col in range(0,n):
        if safe(row,col,chessboard):
            chessboard[row][col] = "Q"
            solve(row+1,chessboard)
            chessboard[row][col] = "."
n=4
res=[]
chessboard=[["." for i in range(n)]for j in range(n)]
solve(0,chessboard)
print(len(res))