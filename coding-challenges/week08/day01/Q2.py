def print_1_by_1(input1):
    if input1==0:
        return
    
    rem=input1%10
    print(rem)
    return print_1_by_1(input1//10)




input1=input("Enter the number=")
input1=input1[::-1]
input1=int(input1)
print_1_by_1(input1)