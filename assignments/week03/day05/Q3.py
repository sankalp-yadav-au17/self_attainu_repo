"""
3. Write code for the following sequence by taking line number as user input 
n = 3 
 1 
121 
 1 
n = 5 
  1 
 121 
12321 
 121 
  1 
"""

# with for loop
n= int(input ( "Enter the line="))
for coloum in range(1,n//2 + n%2 +1):  #spaces
  print(" "*(n-coloum),end="")
  for rows in range(1,coloum+1):  #aage se
    print(rows,end="")
  for rows1 in range(coloum-1,0,-1):   #piche se
    print(rows1,end="")
  print()


for coloum in range(n//2,0,-1): #spaces
  print(" "*(n-coloum),end="")
  for rows in range(1,coloum+1):  #aage se
    print(rows,end="")
  for rows1 in range(1,coloum):  #piche se
    print(rows1,end="")
  print() 


# with while loop

n=int(input("Enter a line="))
coloum=1
while coloum<(n//2 + n%2 +1):
  print(" "*(n-coloum),end="")
  
  rows=1
  while rows<coloum+1:
    print(rows,end="")
    rows=rows+1

  rows1=coloum-1
  while rows1>0:
    print(rows1,end="")
    rows1=rows1-1
  print()

  coloum=coloum+1


coloum=n//2
while coloum>0:
  print(" "*(n-coloum),end="")
  

  rows=1
  while rows<(coloum+1):
    print(rows,end="")
    rows=rows+1

  rows1=1
  while rows1<coloum:
    print(rows1,end="")
    rows1=rows1+1
  print()
    
  coloum=coloum-1