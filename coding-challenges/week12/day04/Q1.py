'''
(Maximum marks -15)
Q-1 ) Kth Largest Element in an Array
https://leetcode.com/problems/kth-largest-element-in-an-array/
(5 marks)
(Medium)
Given an integer array nums and an integer k, return the kth largest element in
the array.
Note that it is the kth largest element in the sorted order, not the kth distinct
element.
Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
'''
import heapq
arr=list(map(int,input("Enter the list").split()))
# arr.sort()
k=int(input("enter the target"))
# for i in range(1,k):
#   arr.pop()
# print(arr[-1])

arr=[-1*i for i in arr]
heapq.heapify(arr)
while k!=0:
    output=-1*heapq.heappop(arr)
    k-=1
print(output)
