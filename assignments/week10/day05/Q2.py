'''
Q-2 )Next Greater Element I:
(5 marks)
https://leetcode.com/problems/next-greater-element-i/
(Medium)
(See doubt session recording today to use stack to solve this problem)
You are given two integer arrays nums1 and nums2 both of unique elements,
where nums1 is a subset of nums2.
Find all the next greater numbers for nums1's elements in the corresponding
places of nums2.
The Next Greater Number of a number x in nums1 is the first greater number to
its right in nums2. If it does not exist, return -1 for this number.
Example 1:Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation:
For number 4 in the first array, you cannot find the next greater number for it in
the second array, so output -1.
For number 1 in the first array, the next greater number for it in the second array
is 3.
For number 2 in the first array, there is no next greater number for it in the
second array, so output -1.
'''

# nums1= list(map(int,input("enter the list1= ").split()))
# nums2= list(map(int,input("enter the list2= ").split()))
nums1=[1,3,5,2,4]
nums2=[6,5,4,3,2,1,7]
A=[]

for i in range(len(nums1)):
    c=0
    for j in range(len(nums2)):

        if nums1[i]==nums2[j] and nums2[j]!=nums2[-1]:
            for k in range(j+1, len(nums2)):
                if nums2[k]>nums2[j]:
                    A.append(nums2[k])
                    c=1
                    break
            if c==0:
                A.append(-1)

        elif nums1[i]==nums2[j] and nums2[j]==nums2[-1]:
            A.append(-1)

print(A)
