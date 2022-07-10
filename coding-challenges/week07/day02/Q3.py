def Sorted(arr,target):
    index=0
    for i in range(0,len(arr)):
        if arr[i]==target:
            index=i
    return index

print(Sorted(list(map(int,input("Enter the list").split())),int(input("Enter the target value="))))
