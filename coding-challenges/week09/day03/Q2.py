'''
Q-2 ) Merge Sorted Array
https://leetcode.com/problems/merge-sorted-array/
(5 marks)
You are given two integer arrays nums1 and nums2, sorted in
non-decreasing order, and two integers m and n, representing the number
of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing
order.
The final sorted array should not be returned by the function, but instead
be stored inside the array nums1. To accommodate this, nums1 has a
length of m + n, where the first m elements denote the elements that should
be merged, and the last n elements are set to 0 and should be ignored.
nums2 has a length of n.
Example 1:Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming
from nums1.
'''

def merge_sort(A,m,B,n):

    p1 = 0
    p2 = 0

    C = list()

    while p1 < m and p2 < n:

        # if A[p1] == 0:
        #     p1 += 1

        # elif B[p2] == 0:
        #     p2 += 1
            
        # elif A[p1] == B[p2]:
        #     C.append(A[p1])
        #     p1+=1
        #     p2+=1

        if A[p1] <= B[p2]:

            C.append(A[p1])
            p1 += 1
        
        elif A[p1] > B[p2]:
            C.append(B[p2])
            p2 += 1

    
    while p1 < m:
        C.append(A[p1])
        p1 += 1

    while p2 < n:
        C.append(B[p2])
        p2 += 1

    return C


nums1 = list(map(int,input("Enter the list = ").split()))
m = int(input("Enter the length of nums1 = "))
nums2 = list(map(int,input("Enter the list = ").split()))
n = int(input("Enter the length of nums2 = "))
print(merge_sort(nums1,m,nums2,n))