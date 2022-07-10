'''
Q-2 )Sort an array of 0s, 1s and 2s:(5 marks)
Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that
sorts the given array. The functions should put all 0s first, then all 1s and all 2s in
last.
Examples:
Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}
Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
'''
arr = list(map(int,input("Enter the list = ").split()))
c=0
for i in range(len(arr)):
    min = i
    for j in range(i+1,len(arr)):
        if arr[j] < arr[min]:
            min=j
            c=1
    if c==1:
        arr[i] , arr[min] = arr[min] , arr[i]

print(arr)