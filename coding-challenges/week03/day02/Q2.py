# using for loop
a=int(input("Enter a number: "))
print("using for loop")
for i in range(1,a):
    print("*"*i)
for i in range(a,0,-1):
    print("*"*i)

# using while loop
print("using while loop")
i=1
while i<=a-1:
    print("*"*i)
    i=i+1
i=a
while i>=0:
    print("*"*i)
    i=i-1