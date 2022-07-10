'''
Try to solve problems using two pointers:
Q-1 ) Squares of a Sorted Array:(5 marks) (easy)
https://leetcode.com/problems/squares-of-a-sorted-array/
Given an integer array nums sorted in non-decreasing order, return an array of the
squares of each number sorted in non-decreasing order.
Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
'''
def mergesort(nums):
    if len(nums)>1:
        mid= len(nums)//2
        L=nums[:mid]
        R=nums[mid:]
        mergesort(L)
        mergesort(R)
        i=j=k=0
    
        while i<len(L) and j<len(R):
            if L[i]<R[j]:
                
                nums[k]=L[i]
                i+=1
            else:
                
                nums[k]=R[j]
                j+=1
            k+=1

        while i<len(L) :
            nums[k]=L[i]
            i+=1
            k+=1
        
        while j<len(R):
            nums[k]=R[j]
            j+=1
            k+=1
        

nums=list(map(int,input("Enter the list = ").split()))
# nums=[-4,-1,0,3,10]

# we will square the elements in the list
for i in range(len(nums)):
    nums[i]=nums[i]**2
print(nums)

mergesort(nums)
print(nums)
