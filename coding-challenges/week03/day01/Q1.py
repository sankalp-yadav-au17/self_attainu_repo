a=int(input("Enter the number:- "))
if a%2==0:
    for i in range(2,11,2):
        print(a*i)

else:
    for i in range(1,10,2):
        print(a*i)