"""
2. Write code for the following sequence by taking line number as user input. 
n = 3 
  1 
 121 
12321 
n = 4 
   1 
  121 
 12321 
1234321 
"""

# with for loop
n= int(input ( "Enter the line="))
for rows in range(1,n+1):
  print(" "*(n-rows),end="")

  for coloum in range(1,rows+1):
    print(coloum,end="")

  for coloum1 in range(rows-1,0,-1):
    print(coloum1,end="")
  print()


# with while loop
n= int(input ( "Enter the line="))
rows=1
while rows<(n+1):
  print(" "*(n-rows),end="")
  

  coloum=1
  while coloum<(rows+1):
    print(coloum,end="")
    coloum=coloum+1

  coloum1=(rows-1)
  while coloum1>0:
    print(coloum1,end="")
    coloum1=coloum1-1
  print()
  rows=rows+1
  



    


    
