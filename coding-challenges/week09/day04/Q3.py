'''
Q-3 ) Sort an array in wave form :(5 marks)
Given an unsorted array of integers, sort the array into a wave like array. An
array ‘arr[0..n-1]’ is sorted in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <=
arr[4] >= …..
Examples:
Input: arr[] = {10, 5, 6, 3, 2, 20, 100, 80}
Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80} OR
{20, 5, 10, 2, 80, 6, 100, 3} OR
any other array that is in wave form
'''
arr = list(map(int,input("Enter the list = ").split()))
arr.sort()
# print(arr)
p1=0
p2=1
A=list()
while p2<len(arr):
    A.append(arr[p2])
    A.append(arr[p1])
    
    p1+=2
    p2+=2

print(A)