'''
(Maximum marks -15)
Q-1 ) Minimum Moves to Equal Array Elements
https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
(5 marks)
(Easy)
Given an integer array nums of size n, return the minimum number of moves
required to make all array elements equal.
In one move, you can increment n - 1 elements of the array by 1.
Example 1:
Input: nums = [1,2,3]
Output: 3
Explanation: Only three moves are needed (remember each move increments
two elements):
[1,2,3] => [2,3,3] => [3,4,3] => [4,4,4]'''


def EAE(nums):
    global count
    c=1
    for i in range(1,len(nums)):
        if nums[0]==nums[i]:
            c+=1
        else:
            break
    if c==len(nums):
        return 

    c=0
    for i in range(1,len(nums)):
        if nums[i-1]<=nums[i] and c!=2:
            nums[i-1]+=1
            c+=1
        elif nums[i-1]>nums[i] and c!=2:
            nums[i]+=1
            c+=1
    count+=1
    EAE(nums)
        
nums=list(map(int,input("Enter the list = ").split()))
count=0
EAE(nums)
print(count)
