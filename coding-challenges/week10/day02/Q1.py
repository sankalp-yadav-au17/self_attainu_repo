'''
Q-1 )Find the Duplicate Number:
https://leetcode.com/problems/find-the-duplicate-number/
(Solve the above using both the approaches discussed in class) and comment on
time
complexity.
:(5 marks)
Given an array of integers nums containing n + 1 integers where each integer is
in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only
constant extra space.
Example 1:
Example 1:
Input: nums = [1,3,4,2,2]
Output: 2
'''
nums=list(map(int,input("Enter the list = ").split()))
hash_t={}

for i in nums:
    if i in hash_t:
        hash_t[i]+=1
        if hash_t[i]>=2:
            print(i)
    else:
        hash_t[i]=1