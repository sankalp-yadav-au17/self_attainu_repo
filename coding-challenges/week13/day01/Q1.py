'''
Q-1 ) Fibonacci Number - solve without DP
https://leetcode.com/problems/fibonacci-number/
(5 marks)
(Easy)
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
Fibonacci sequence, such that each number is the sum of the two preceding
ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
'''
# 0,1,1,2,3,5
# a,b,c
def fibonacci(a,b,d):
    global e
    c=a+b
    a=b
    b=c
    e+=1
    if e>d+1:
        return c
    return fibonacci(a,b,d)


a=0
b=1
d=int(input("enter the number = "))
e=2
# a=int(input("Enter the number = "))
print(fibonacci(a,b,d))