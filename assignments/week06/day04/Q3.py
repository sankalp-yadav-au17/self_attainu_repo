def Sum(number):
    sum=0
    while number!=0:
        a=number%10
        sum=sum+a
        number=number//10
    if sum%2==0:
        return 1

arr=list(map(int,input("Enter list of numbers=").split()))
a=[]
for i in arr:
    if Sum(i)==1:
        a.append(i)
print(a)

