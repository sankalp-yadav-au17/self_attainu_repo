'''
1. input the array
2. for loop and one by one we will pick the numbers and send to function
3. function
    1. we will convert it into string 
    2. split
    3. reverse 
    4. compare original and new
    5. return whethtere palindrome or not
'''
#function
def Palindrome(a):
    length=len(a)
    first=0
    last=length-1
    while(first<last):
        if (a[first]==a[last]):
            first=first+1
            last=last=1
        else:
            return f"Not Palindrome"
    return f"Palindrome"



# take number of rows and columns as input
rows=int(input("Enter number elements="))


#initializing empty matrix
matrix=[]

# give numbers to the matrix as input
for i in range(rows):
        matrix.append(input("input a number="))



#problem logic 
a=[]
for i in matrix:
    if Palindrome(i)=="Palindrome":
        a.append(i)
    else:
        continue
print(a)

