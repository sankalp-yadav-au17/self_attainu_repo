def Convert_Binary_to_Decimal(list1):
    sum=0
    length=len(list1)
    for i in range(length-1,-1,-1):
        sum=sum+(list1[i])*2**(length-i-1)
    return sum


print(Convert_Binary_to_Decimal(list(map(int,input("Enter the list=").split()))))


"""
Time Complexity = O(n)
Space Complexity = O(n)
"""