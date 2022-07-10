def Binarysearch(arr,target):
    left = 0
    right = len(arr)-1
    while left<=right:
        mid=(left+right)//2

        if arr[mid]==target:
            return mid

        elif arr[mid]>target:
            right =mid-1

        elif arr[mid]<target:
            left= mid+1
    
    return -1


print(Binarysearch(list(map(int,input("Enter the list=").split())),int(input("Enter the target value="))))


'''
Time complexity =O(logn)
Space Complexity =O(1)
'''

