'''
Q-3) Partition Equal Subset Sum
(5Marks)
(Medium)
https://leetcode.com/problems/partition-equal-subset-sum/
Given a non-empty array nums containing only positive integers, find if the array
can be partitioned into two subsets such that the sum of elements in both
subsets is equal.
Example 1:
Input: nums = [1,5,11,5]Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
'''



def abc(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False 
    target = total // 2
    
    dp = [False]*(target + 1)
    dp[0] = True
    
    for num in nums:
        for i in range(target, num-1, -1):
            if dp[target]: 
                return True
            dp[i] = dp[i] or dp[i-num]
    return dp[target]
    
print(abc([1,5,11,5]))
