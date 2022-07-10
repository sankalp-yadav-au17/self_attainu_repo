'''
Q-2 )Solve above question with DP
(5 marks)
'''

def Fib(no,dp):
    if no == 0:
        return 0
    if no == 1:
        return 1
    if dp[no]!=-1:
        return dp[no]

    ans= Fib(no - 1, dp) + Fib(no - 2, dp)
    dp[no] = ans
    return ans

no = int(input("Enter the number = "))
dp = [-1]*1000
print(Fib(no,dp))

