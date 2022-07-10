'''
Q-3 ) Write a program perform selection sort using an auxiliary (extra) list,
and tell the time complexity and space complexity of your code. (5 marks)
'''
arr = list(map(int,input("Enter the list = ").split()))
arr1 = []

for i in range(len(arr)):
    min = 0
    for j in range(len(arr)):
        if arr[j] < arr[min]:
            min = j
    arr1.append(arr.pop(min))

print(arr1)