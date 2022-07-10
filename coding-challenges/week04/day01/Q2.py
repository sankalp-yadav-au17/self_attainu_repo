"""
Write a function fibonacci(n) which returns the nth fibonacci number. This 
should be calcuated using the while loop. The default value of n should be 10.
fibonacci(1)
>>>0
fibonacci(2)
>>>1
fibonacci(3)
>>>1
fibonacci(4)
>>>2
fibonacci(5)
>>>3
Also find the maximum of:
fibonacci(12)+fibonacci(10) and fibonacci(11)+fibonacci(11).
"""

def fibonacci(n=10):
    i=3
    a=0
    # print(a)
    b=1
    # print(b)
    while i <=n:
        c=a+b
        # print(c,i)
        a=b
        b=c
        i=i+1
    return c

fibonacci()

a=fibonacci(12)+fibonacci(10)
print("value of a is=",a)
# b=fibonacci(11)+fibonacci(11)
# print("value of b is=",b)
# print("max value is=",max(a, b))

