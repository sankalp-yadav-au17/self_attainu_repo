# using for loop 
a=int(input("Enter a Number: "))
print("using for loop")
if a%2==1:
    for i in range(1,22,2): 
        print(a*i)
else:
    for i in range(2,21,2):
        print(a*i)

# using while loop
print("using while loop")
if a%2==1:
    i=1
    while i<=21:
        print(a*i)
        i=i+2

else:
    i=2
    while i<=20:
        print(a*i)
        i=i+2
