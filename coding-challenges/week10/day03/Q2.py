'''
Q-2 ) Number of 1 Bits:
(5 marks)
(Medium)
https://leetcode.com/problems/number-of-1-bits/
Write a function that takes an unsigned integer and returns the number of '1' bits
it has (also known as the Hamming weight).
Example 1:
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has
a total of three '1' bits.
'''
def hamming(n):
    c=0
    for i in n:
        if i==1:
            c+=i
    return c
            
n=list(map(int,input("Enter the list= ")))
print(hamming(n))

