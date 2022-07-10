'''
1. Write code for the following sequence by taking line number as user input: 
n = 5 
** 
 ** 
  ** 
 ** 
** 
n=3 
** 
 ** 
**
'''
# with for loop
n=int(input("Enter the number of line="))
for line in range(1, 1+(n//2 + n%2)):
    print(" "*(line-1), "*"*2)
for line in range(n//2 + n%2+1, n+1):
    print(" "*(n-line), "*"*2)


# with while loop
n=int(input("Enter the number of line= )"))
line=1
while line<(1+(n//2+n%2)):
    print(" "*(line-1), "*"*2)
    line=line + 1

line=n//2 + n%2+1
while line<(n+1):
    print(" "*(n-line), "*"*2)
    line=line+1