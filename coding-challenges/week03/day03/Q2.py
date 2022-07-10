n= int(input("Enter the number of lines you want: "))
for i in range(1,n+1):
  if i<=(n//2+n%2):
    print(" "*((n//2)-i+1),"*"*(2*i-1))
  else:
    print(" "*(i-(n//2)-1),"*"*(2*(n-i)+1))
