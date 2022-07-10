'''
(Maximum marks -15)
Q-1 ) Climbing Stairs - solve without DP
https://leetcode.com/problems/climbing-stairs/
(5 marks)
(Easy)
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you
climb to the top?
Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
'''

def step(a,n):
    global one_step
    global two_step
    if a==n:
        return 1
    if a>n:
        return 0
    
    one_step+=step(a+1,n)
    two_step+=step(a+2,n)
    
    return one_step+two_step

one_step=0
two_step=0
n=2
a=0
print(step(a,n))