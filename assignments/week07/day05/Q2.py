n=int(input("Enter the number = "))
for i in range(n//2):
    if i*i>n:
        print(i-1)
    elif i*i==n:
        print(i)
        