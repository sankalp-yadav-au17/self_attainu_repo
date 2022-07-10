'''
Q-3 ) Longest Common Prefix:
https://leetcode.com/problems/longest-common-prefix/submissions/
(5 marks)
Write a function to find the longest common prefix string amongst an array of
strings.
If there is no common prefix, return an empty string "".
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
'''

strs = list(input("Enter the list = ").split())
min=len(strs[0])
for i in strs:
    if len(i)<min:
        min=len(i)



p1=0
B=""
p2=0
while p1<min:    
    A=strs[0][p1] 
    for i in range(1,len(strs)):
        if strs[i][p1]!=A:
            p2=1
            break
        else:
            continue
    if p2==0:
        p1+=1
        B+=A
    else:
        break

print(B)
# return B