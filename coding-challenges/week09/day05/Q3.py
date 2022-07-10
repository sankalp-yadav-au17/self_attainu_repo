'''
Q-3 )Maximum Ascending Subarray Sum: (5 marks) (easy)
https://leetcode.com/problems/maximum-ascending-subarray-sum/
Given an array of positive integers nums, return the maximum possible sum of an
ascending subarray in nums.
A subarray is defined as a contiguous sequence of numbers in an array.
A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r,
numsi < numsi+1. Note that a subarray of size 1 is ascending.
Example 1:
Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
'''

nums = list(map(int,input("Enter the list= ").split()))
# nums = [100,10,1]
p1=1
sum=nums[0]
maximum=0
while p1<len(nums):
    if nums[p1]>nums[p1-1]:
        sum+=nums[p1]
    else:
        maximum=max(maximum,sum)
        sum=nums[p1]
    p1+=1
maximum=max(maximum,sum)
print(maximum)

