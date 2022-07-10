def Lower_Bound(arr,target):
    for i in range(0,len(arr)-1):
        if target==arr[i]:
            return i
        elif arr[i]<target:
            continue
        else:
            return i-1
    


print(Lower_Bound(list(map(int,input("Enter a list=").split())),int(input("Enter the target value="))))
