'''
Q-3 )Pow(x, n)
- Solve using DP
https://leetcode.com/problems/powx-n/
(Medium)
(5 marks)
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
Example 1:
Input: x = 2.00000, n = 10
'''
def myPow(x, n):
        
    if x == 0:
        return 0
    if n == 0 or x == 1:
        return 1
    if n == 1:
        return x
    if n == -1:
        return 1/x
    
    if n % 2 == 0:
        return myPow(x, n//2) ** 2
    else:
        return myPow(x, n//2) * myPow(x, (n//2) + 1)

n=int(input("Enter the number = "))
x=int(input("Enter the number = "))
print(myPow(x,n))