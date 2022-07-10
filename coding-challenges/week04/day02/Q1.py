'''
Take 2 sequences of space separated integers as input from the user and convert 
it into a list of integers. Extend the first list with all the items of the 
second list and print the output.
Ex:
Input 1:
1 2 3 4
11 434 1
Output 1:
1 2 3 4 11 434 1
Input 2:
1 2 3
8 7
Output 2:
1 2 3 8 7
Hint: Consider using the inbuilt extend() function of lists in python
'''

a=input("Enter a sequence=")
a=a.split(" ")
print("before typecasting",type(a[2]))
b=input("Enter the second sequence=")
b=b.split(" ")
print("before typecasting",type(b[2]))

a.extend(b)
print("extended value",a)

for i in range(0,len(b)):
    b[i]=int(b[i])

print(b)

print("after typecasting",type(b[2]))




