'''
Q - 2 ) Solve question 1 , but use binary search search.
Write time a
'''
# LOWER BOUND
arr=list(map(int,input("Enter the list= ").split()))
target= int(input("Enter the target value= "))
left=0
right= len(arr)-1
while left<=right :
    mid=(left+right)//2
    if arr[mid]==target:
        right=mid-1
    elif arr[mid]<target:
        left=mid + 1
    elif arr[mid]>target:
        right=mid-1
print("lower bound",mid)


#upper bound 
left=0
right = len(arr)-1
while left <= right:
    mid=(left + right )//2
    if arr[mid]==target :
        left=mid+1
    elif arr[mid]>target :
        right=mid-1
    elif arr[mid]<target:
        left=mid+1
print("upper bound",mid) 

"""
time complexity = O(logn)
space complexity= O(1)
"""