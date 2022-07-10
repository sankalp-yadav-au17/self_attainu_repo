'''
Q - 3 ) Find largest number in a list, and second largest number, (without
using inbuilt functions).
eg:
A = [1,3,4,5,8,1,2,3,4,9,6,9]
return 9 and 8.
Write time and space complexity of your code.
(3 marks)
1 3 4 5 8 1 2 3 4 9 6 9
'''
arr=list(map(int,input("Enter the list= ").split()))
first_max=0
for i in arr:
    if i>first_max:
        first_max=i
print("first max= ",first_max)
second_max=0
for i in arr:
    if i>second_max and i<first_max:
        second_max=i
print("second max= ",second_max)


"""
time complexity=O(n)
space complexity=O(1)
"""

