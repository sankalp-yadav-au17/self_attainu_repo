'''
Q - 3) Write a function to return sum of rows of a matrix as a list: (5 marks)
'''



def sum_matrix(matrix):
    a=[]
    for i in range(row):
        sum=0
        for j in range(column):
            sum=sum+matrix[i][j]
        a.append(sum)
    return a



row=int(input("Enter the rows = "))
column=int(input("Enter the column = "))
matrix=[list(map(int,input().split())) for i in range(row) ]
print(sum_matrix(matrix))
