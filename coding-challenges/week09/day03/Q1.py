'''
Q-1 ) Intersection of Two Arrays
https://leetcode.com/problems/intersection-of-two-arrays/submissions/
(5 marks)
Given two integer arrays nums1 and nums2, return an array of their
intersection. Each element in the result must be unique and you may return
the result in any order.
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
'''

def intersection_of_arrays(nums1,nums2):
    output = set()
    
    for i in nums1:
        if i in nums2:
            output.add(i)
    
    return list(output)


nums1=list(map(int,input("Enter the list1 = ").split()))
nums2=list(map(int,input("Enter the list2 = ").split()))

print(intersection_of_arrays(nums1,nums2))