'''
Questions : 3 --
Print prime numbers between 1 to N : ---marks: 5
using for loop :
Also , find the Time and Space complexity
Example : -
Input : - N = 10
output : - [2 , 3 , 5 , 7 ]
Explanation : - 2 , 3 , 5 , 7 are primes number between 1 to 10
Sample :-
Def Prime_number(N):
#write code here
'''


def prime_number(n):
    list1=[]
    for i in range(2,n+1):
        c=0
        for j in range(1,i+1):
            if i%j==0:
                c=c+1
        if c<=2:
            list1.append(i)
            

    return list1

print(prime_number(int(input("Enter a number="))))

"""
Time conmplexity of above program is O(n*m)
Space complexity of above program is O(list1)
"""




