'''Q-2 )Solve above question with DP
(5 marks)
'''

def step(a,n,dp):
    if a==n:
        return 1
    if a>n:
        return 0
    if dp[a] != -1:
        return dp[a]
    
    one_step=step(a+1,n,dp)
    two_step=step(a+2,n,dp)
    
    return one_step+two_step


n=2
a=0
dp=[-1]*1000
print(step(a,n,dp))