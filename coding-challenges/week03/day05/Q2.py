"""
b. Redefine the same function with default values for numbers as 3 and 5 and opname as "Add". Use the same functi
on to calculate 5+3-12+23
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


a= arithmetic_operation(5,3,"add")
b= arithmetic_operation(-12,23,"add")
print(a+b)
