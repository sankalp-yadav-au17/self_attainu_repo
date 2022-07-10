'''
https://leetcode.com/problems/rotate-array/
'''

'''
1. input is a list of int
2. given k
3. run the loop in array
4. pop last element 
5. insert the element
'''

nums= list(map(int,input().split()))     #input list
k= int(input())
for i in range(0,k):
    last_element= nums.pop()
    nums.insert(0,last_element)
print(nums)

