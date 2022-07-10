'''
Q - 2) Write a program to print sum of border elements of a square Matrix
(5 marks)
'''
row=int(input("Enter the rows = "))
column=int(input("Enter the column = "))
matrix=[list(map(int,input().split())) for i in range(row) ]
sum=0

for i in range(row):
    if i == 0 or i == row-1:
        for j in range(column):
            sum=sum + matrix[i][j]
    
    else:
        for j in range(column):
            if j==0 or j==column-1:
                sum=sum+matrix[i][j]

print(sum)