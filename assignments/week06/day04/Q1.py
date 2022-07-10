'''
1.input number of rows and columns 
2. empty matrix initialize
3.input numbers into the matrix
4. running loops : checking condition 1!=j and number falls below 3 should be printed as prime numbers
5. running loops : checking condition 1!=j and number falls above 3 then check if prime number or not.
    1. if caught the break 
    2. if not print prime number and break

exception
to print the array run the nested loop and print the matrix with i and j and end it with end=" "
'''



def Matrix(a):

    if i!=j and a<=3:
            return a
    elif i!=j and a>3:
        for k in range(2,a):
            if a%k==0:
                break
            else:
                return a
                break


# take number of rows and columns as input
rows=int(input("Enter number of rows="))
columns=int(input("Enter number of columns="))

#initializing empty matrix
matrix=[]

# give numbers to the matrix as input
for i in range(rows):
    a=[]    
    for j in range(columns):
        a.append(int(input("input a numner=")))
    matrix.append(a)



# problem
for i in range(rows):
    for j in range(columns):
        if Matrix(matrix[i][j])== None:
            continue
        else:
            print(matrix[i][j],end=",")
    print()
        


# For printing the matrix   
# for i in range(rows):   
#    for j in range(columns):   
#       print(matrix[i][j], end = " ")   
#    print()   

            

            
            
'''
1 2 3
4 5 6
7 8 9
'''


