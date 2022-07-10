"""
5. Write a function that takes line number as input (with default value of 5) and prints the following pattern. 
n=3 
..... 
.. .. 
.   . 
.. .. 
..... 
n = 5 
....... 
... ... 
..   .. 
.     . 
..   .. 
... ... 
.......
"""
# n=int(input("Enter line number="))
# for coloum in range(1,n+3):

#     if coloum==1 or coloum==n+2:             
#         print("*"*(n+2))
#     else:
#         if coloum<=(n//2 + n%2 +1):
#             print("*"*(n-coloum+1),end="")
#             print(" "*(2*(coloum-1)-1),end="")
#             print("*"*(n-coloum+1))
            
#         else:
#             print("*"*(n-coloum+3),end="")
#             print(" "*(2*(n-coloum)+3),end="")
#             print("*"*(n-coloum+3))




#using for loop
def pattern(n):
    k=1
    for coloum in range(1,n//2 + n%2 + 2):
        if coloum==1:
            print("*"*(n+2))

        else:
            print("*"*((n//2 + n%2 + 1)-(coloum-1)),end="")
            print(" "*(2*coloum-3),end="")
            print("*"*((n//2 + n%2 + 1)-(coloum-1)))

    for coloum2 in range(n//2 + n%2,0,-1):
        if coloum2==1:
            print("*"*(n+2))
        else:
            print("*"*(k+1),end="")
            print(" "*(2*coloum2-3),end="")
            print("*"*(k+1))
            k=k+1

a=int(input("Enter the number of lines="))
pattern(a)

#using while loop
def pattern(n):
    k=1
    coloum=1
    while coloum<(n//2+n%2+2):
        if coloum==1:
            print("*"*(n+2))
        else:
            print("*"*((n//2 + n%2 + 1)-(coloum-1)),end="")
            print(" "*(2*coloum-3),end="")
            print("*"*((n//2 + n%2 + 1)-(coloum-1)))
        coloum=coloum+1

    coloum2=n//2+n%2
    while coloum2>0:
        if coloum2==1:
            print("*"*(n+2))
        else:
            print("*"*(k+1),end="")
            print(" "*(2*coloum2-3),end="")
            print("*"*(k+1))
            k=k+1
        coloum2=coloum2-1

a=int(input("Enter the number of lines="))
pattern(a) 




