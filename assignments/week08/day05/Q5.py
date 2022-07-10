'''
Q - 5 ) Intersection of Two Arrays II
https://leetcode.com/problems/intersection-of-two-arrays-ii/
Given two integer arrays nums1 and nums2 , return an array of their intersection .
Each element in the result must appear as many times as it shows in both arrays
and you may return the result in any order.
'''
num1=list(map(int,input("Enter the 1st list= ").split()))
num2=list(map(int,input("Enter the 2st list= ").split()))
l=[]
for i in num1:
    if i in num2:
        l.append(i)
        num2.pop(num2.index(i))
print(l)