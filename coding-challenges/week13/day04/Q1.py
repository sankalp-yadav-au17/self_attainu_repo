'''Q-1 ) Is Subsequence
https://leetcode.com/problems/is-subsequence/
(7.5 marks)
(Easy)
Given two strings s and t, return true if s is a subsequence of t, or false
otherwise.
A subsequence of a string is a new string that is formed from the original string
by deleting some (can be none) of the characters without disturbing the relative
positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde"
while "aec" is not).
Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:
Input: s = "axc", t = "ahbgdc"
Output; false
'''
def dp(i, j):
    if i == m:
        return True
    j = t.find(s[i], j)
    if j != -1:
        return dp(i + 1, j + 1)
    return False
    
s = "abc"
t = "ahbgdc"
if not s:
    print( True)
elif not t:
    print( False)
m = len(s)
i=0
j=0
print(dp(i,j))