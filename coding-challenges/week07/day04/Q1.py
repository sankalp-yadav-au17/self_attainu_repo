def lower_bound(arr,target):
    left = 0
    right = len(arr)-1
    a=0
    c=0
    while left <= right:
        mid = (left+right)//2
        if arr[mid] == target:
            a=mid
            c=1
            right=mid-1
        if arr[mid]>target:
            right = mid -1
        if arr[mid]<target:
            left = mid + 1
    if c==0:
        return mid-1
    else:
        return a


arr=list(map(int,input("Enter the list=").split()))
target=int(input("Enter the target value="))
print(lower_bound(arr,target))



"""
1. input list and target

"""

