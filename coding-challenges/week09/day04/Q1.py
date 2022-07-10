'''
Q-1 ) Find whether an array is subset of another array:(5 marks)
Examples:
Input: arr1[] = {11, 1, 13, 21, 3, 7}, arr2[] = {11, 3, 7, 1}
Output: arr2[] is a subset of arr1[]
Input: arr1[] = {1, 2, 3, 4, 5, 6}, arr2[] = {1, 2, 4}
Output: arr2[] is a subset of arr1[]
Input: arr1[] = {10, 5, 2, 23, 19}, arr2[] = {19, 5, 3}
Output: arr2[] is not a subset of arr1[]
'''
arr1 = list(map(int,input("Enter the list = ").split()))
arr2 = list(map(int,input("Enter the list = ").split()))
c=0
for i in arr2:
    if i in arr1:
        c+=1

if c==len(arr2):
    print("arr2[] is a subset of arr1[]")
else:
    print("arr2[] is not a subset of arr1[]")


