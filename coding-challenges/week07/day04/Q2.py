def Upper_bound(arr,target):
    left=0
    right=len(arr)-1
    rep=0
    c=0
    while left<=right:
        mid=(left + right)//2
        if arr[mid]==target:
            rep=mid
            left=mid+1
            c=1
        elif arr[mid]<target:
            right =mid-1
        else:
            left=mid+1
    if c==1:
        return 11-rep
    else:
        return 11-mid
        

arr=list(map(int,input("Enter a list = ").split()))
arr.reverse()
target=int(input("Enter the target value="))
print(Upper_bound(arr,target))