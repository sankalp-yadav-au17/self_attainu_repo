n= int(input("Enter the number of lines you want: "))
for i in range(1,n//2 + n%2 +1):
    print(" "*(n-i),"*"*(2*i-1)," "*(n-i))
   
for i in range(n//2 + n%2-1,0,-1):
    print(" "*(n-i),"*"*(2*i-1)," "*(n-i))

    



