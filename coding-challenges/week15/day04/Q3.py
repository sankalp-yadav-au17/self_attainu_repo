'''
Q-3) Minimum Operations to Reduce X to Zero
(5 marks)
https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
(Medium)
You are given an integer array nums and an integer x. In one operation, you can
either remove the leftmost or the rightmost element from the array nums and
subtract its value from x. Note that this modifies the array for future operations.Return the minimum number of operations to reduce x to exactly 0 if it is
possible, otherwise, return -1.
Example 1:
Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x
to zero.'''

# nums = [1,1,4,2,3]
# x = 5
# count=0
# while x>0:
#     if nums[len(nums)-1] > nums[0] and nums[len(nums)-1] < x:
#         x=x-nums.pop(len(nums)-1)
#         count+=1
#     elif nums[len(nums)-1] < nums[0] and nums[0] < x:
#         x=x-nums.pop(0)
#         count+=1
#     elif nums[len(nums)-1] > nums[0] and nums[len(nums)-1] > x:
#         x=x-nums.pop(0)
#         count+=1
#     elif nums[len(nums)-1] < nums[0] and nums[0] > x:
#         x=x-nums.pop(len(nums)-1)
#         count+=1
# if x==0:
#     print(count)
# else:
#     print(-1)

nums = [1,1,4,2,3]
x = 5
d = {}
s = 0
ans = float('inf')
d[0]=len(nums)
for i in range(len(nums)-1,-1,-1):
    s+=nums[i]
    d[s]=i
    if s==x:
        ans=min(ans,len(nums)-i)
s = 0
n = len(nums)
for i in range(len(nums)):
    s+=nums[i]
    if x-s in d:
        if d[x-s]>i:
            ans=min(ans,n-d[x-s]+i+1)
if ans==float('inf'):
    ans =-1
print(ans)