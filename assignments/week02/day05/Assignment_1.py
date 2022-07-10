# What are the default data types in python?
#        Default datatypes are:-
#           >integer(int)
#            >float(float)
#            >boolean(bool)
#            >string(str)

# What is typecasting in python?
#    Changing from one variable datatype to another
#    as per the required need for the operations.


# a. string to boolean
A=input("Enter the string: ")
print("Type is",type(A))
B=bool(A)
print("Boolean answer",B)
print("Type is",type(B))
print(end="\n")


# b. integer to boolean
A=int(input("Enter the integer: "))
print("Type is",type(A))
B=bool(A)
print("Boolean answer",B)
print("Type is",type(B))
print(end="\n")


# c. boolean to string
A=bool(input("Enter the boolean: "))
print("Type is",type(A))
B=str(A)
print("String answer",B)
print("Type is",type(B))
print(end="\n")


# d. string to integer
A=str(input("Enter the string: "))
print("Type is",type(A))
B=int(A)
print("Integer answer",B)
print("Type is",type(B))
print(end="\n")