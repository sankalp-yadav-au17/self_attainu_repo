"""
Question 2. Write a program to find the fibonacci number in a string.
"""
def fibonacci(a,b,n):

    c=a+b
    a=b
    b=c
    if n==0:
        return c
    return fibonacci(a,b,n-1)

n=int(input("Enter the number = "))
print(fibonacci(input("Enter the 1st number ="),input("Enter the 2nd number ="),n))

"""
time complexity =O(n)
space complexity =O(n)
"""
