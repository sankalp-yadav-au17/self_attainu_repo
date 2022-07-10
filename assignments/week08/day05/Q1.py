'''
Q - 1 ) Write a program to find the upper bound (first occurrence’s index) of
a target given by the user, that should be present in the list. Using linear
search.

eg:
A= [1,1,1,2,2,2,3,3,4]
lower bound of 2 = 3
upper bound of 2 = 5

Your code should return 5.

Write time and space complexity of your code.
(3 marks)
'''
#lower bound
arr = list(map(int,input("Enter the list= ").split()))
target = int(input("Enter the target= "))
for i in range(len(arr)):
    if arr[i] == target:
        print("lower bound= ",i)
        break

   

for i in range(len(arr)-1,-1,-1):
    # print(arr[i])
    if arr[i]== target:
        print("upper bound= ",i)
        break
"""
time complexity= O(n)
Space complexity=O(1)
"""

