'''
Q - 1 ) Sort Array by Increasing Frequency (5 Marks)
https://leetcode.com/problems/sort-array-by-increasing-frequency/submissions/
Given an array of integers nums, sort the array in increasing order based on the
frequency of the values. If multiple values have the same frequency, sort them in
decreasing order.
Return the sorted array.
Example 1:
Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a
frequency of 3.
'''
nums = list(map(int,input("Enter the list = ").split()))
dict= {}
nums.sort(reverse=True)

for idx in nums:
    if idx in dict:
        dict[idx] += 1
    else:
        dict[idx]=1

A=[]
while dict!={}:

    minimum=min(dict.values()) 
    for key,value in dict.items():
        if value==minimum:

            for i in range(minimum):
                A.append(key)
            dict.pop(key)
            break
print(A)
# return A
