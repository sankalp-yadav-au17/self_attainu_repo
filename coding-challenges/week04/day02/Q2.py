'''
Accomplish the same task as Lists are US - 1 but without using the built-in 
extend() function of the list data type in python.
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
'''

a=input("Enter a sequence=")
a=a.split(" ")
print("before typecasting",type(a[2]))
b=input("Enter the second sequence=")
b=b.split(" ")
print("before typecasting",type(b[2]))

c=0
c=a+b
print("extended value",c)

for i in range(0,len(c)):
    c[i]=int(c[i])

print(c)

print("after typecasting",type(c[2]))





