'''
Q-4 ) [Bonus Question] Move Zeroes: (5 extra marks) (Medium)
https://leetcode.com/problems/move-zeroes/
Given an integer array nums, move all 0's to the end of it while maintaining the relative
order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
'''
nums= list(map(int,input("Enter the list = ").split()))
nums=[10,20,30,5,12,50]

result=0
for i in range(len(nums)):
    output=0
    for j in range(i+1,len(nums)):
        if nums[j]>nums[j-1]:
          output+=nums[j-1]
        else:
            output+=nums[j-1]
            result=max(result,output)
            break

