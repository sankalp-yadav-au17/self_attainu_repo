'''
Q-2 ) Reverse String:(5 marks) (easy)
Write a function that reverses a string. The input string is given as an array of characters
s.
https://leetcode.com/problems/reverse-string/
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
'''
nums = list(input("Enter the list = "))
p1=0
p2=len(nums)-1

while p1<=p2:
    nums[p1],nums[p2]=nums[p2],nums[p1]
    p1+=1
    p2-=1

print(nums)