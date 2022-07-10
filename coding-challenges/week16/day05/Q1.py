'''
1) Write a Program to find the largest element in an arrray
Example:
Input : arr[] = {10, 20, 4}
Output : 20
Input : arr[] = {20, 10, 20, 4, 100}
Output : 100 
'''

arr = list(map(int,input("Enter the list = ").split()))
print(max(arr))