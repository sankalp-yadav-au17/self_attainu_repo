'''
Q-1 ) Number of Good Pairs: (5 marks)
https://leetcode.com/problems/number-of-good-pairs/
Easy
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.
Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
'''
c=0
nums=list(map(int,input("Enter the list = ").split()))
for i in range(len(nums)):
    for j in range(i+1,len(nums)):
        if nums[i]==nums[j] and i<j:
            c+=1
print(c)