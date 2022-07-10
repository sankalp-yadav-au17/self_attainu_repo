'''Q-2)Sum of All Subset XOR Totals
(5 marks)
https://leetcode.com/problems/sum-of-all-subset-xor-totals/
(Easy)
The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if
the array is empty.
● For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
Given an array nums, return the sum of all XOR totals for every subset of nums.
Note: Subsets with the same elements should be counted multiple times.
An array a is a subset of an array b if a can be obtained from b by deleting some
(possibly zero) elements of b.
Example 1:
Input: nums = [1,3]
Output: 6
Explanation: The 4 subsets of [1,3] are:
- The empty subset has an XOR total of 0.
- [1] has an XOR total of 1.
- [3] has an XOR total of 3.- [1,3] has an XOR total of 1 XOR 3 = 2.
0 + 1 + 3 + 2 = 6
'''
def gensubseq(nums,idx,cur):
    global arr
    if idx==len(nums):
        # print(cur)
        arr.append(list(cur))
        return 
    cur.append(nums[idx])
    gensubseq(nums,idx+1,cur)

    cur.pop()
    gensubseq(nums,idx+1,cur)
    
nums=[5,1,6]
arr=[]
gensubseq(nums,0,[])
for i in range(len(arr)):
    sum=0
    for j in range(len(arr[i])):
        sum=sum^arr[i][j]
    arr[i]=sum
sum=0
for i in arr:
    sum+=i
print(sum)