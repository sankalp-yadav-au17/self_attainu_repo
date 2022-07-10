'''
Q-2 )Sum of Unique Elements:
https://leetcode.com/problems/sum-of-unique-elements/
(5 marks)
You are given an integer array nums. The unique elements of an array are the elements that appear
exactly once in the array.
Return the sum of all the unique elements of nums.
Example 1:
Input: nums = [1,2,3,2]
Output: 4Explanation: The unique elements are [1,3], and the sum is 4.
'''

nums=list(map(int,input("Enter the list= ").split()))

hash_t={}
for i in nums:
    if i in hash_t:
        hash_t[i]+=1        
    else:
        hash_t[i]=1


sum=0
for key,value in hash_t.items():
    if value<=1:
        sum+=key

print(sum)
