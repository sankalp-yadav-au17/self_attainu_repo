'''
Q - 1) Write a program to print sum of right diagonal of a matrix: (5 marks)
'''
row=int(input("Enter the rows = "))
column=int(input("Enter the column = "))
matrix=[list(map(int,input().split())) for i in range(row) ]

sum=0
for i in range (row):
    # for j in range(column):
        sum=sum+ matrix[i][column-1-i]

print(sum)
