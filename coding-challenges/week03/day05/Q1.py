"""
a. Define a function arithmetic_operation() which takes 2 numbers and operation name as input and performs an ope
ration on them: 
* opname: "Add" - Then we add 2 numbers 
* opname: "Sub" - Then we subtract 2 numbers 
* opname: "Multiply" - Then we multiply 2 numbers 
* opname: "Divide" - Then we divide the 2 numbers 
Print the result of the operation and also return it. 
"""

def arithmetic_operation(n,m,op):

    
    if op=="Add" or op=="add":
        return n+m
    elif op=="Sub" or op=="sub":
        return n-m
    elif op=="Multiply" or op=="multiply":
        return n*m
    elif op=="divide" or op=="divide":
        return n/m


n=int(input("Enter 1st number="))
m=int(input("Enter 2nd number="))
op=input("Enter operation=")
c= arithmetic_operation(n,m,op)
print(c)