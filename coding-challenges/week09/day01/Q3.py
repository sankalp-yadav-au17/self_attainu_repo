'''
Q-3 ) Given a number n, find sum of first n natural numbers:(5 marks)
Examples :
Input : 5
Output : 15
Explanation : 1 + 2 + 3 + 4 + 5 = 15
Input : 7
Output : 28
Explanation : 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28
'''

def sumofnaturalno(n):
    if n==0:
        return n
    return n+sumofnaturalno(n-1)

n=int(input("Enter the number= "))
print(sumofnaturalno(n))