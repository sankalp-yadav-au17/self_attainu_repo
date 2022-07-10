'''
Q-1 ) 4Sum
https://leetcode.com/problems/4sum/
(7.5 marks)
(Medium)
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
● 0 <= a, b, c, d < n
● a, b, c, and d are distinct.
● nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]'''

nums = [1,0,-1,0,-2,2]
target= 0
res=[]
nums.sort()
for i in range(len(nums)):
    for j in range(i+1,len(nums)):
        left=j+1
        right=len(nums)-1

        while left<right:
            result=nums[i]+nums[j]+nums[left]+nums[right]
            if result > target:
                right-=1
            if result <target:
                left+=1
            elif result == target:
                oye = [nums[i],nums[j],nums[left],nums[right]]
                if oye not in res:
                    res.append(oye)
        
                left+=1
                right-=1
print(res)