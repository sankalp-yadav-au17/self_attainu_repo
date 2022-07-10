'''
Q-3 ) Longest Common Subsequence - Solve using DP
(5 marks)
https://leetcode.com/problems/longest-common-subsequence/(Medium)
Given two strings text1 and text2, return the length of their longest common
subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with
some characters (can be none) deleted without changing the relative order of the
remaining characters.
● For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both
strings.
Example 1:
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is
3.'''

def Lcs(str1,str2,i1,i2):
    if i1>=len(str1) or i2>=len(str2):
        return 0
    if str1[i1]==str2[i2]:
        return 1 + Lcs(str1,str2,i1+1,i2+1)
    else:
        return max(Lcs(str1,str2,i1+1,i2),Lcs(str1,str2,i1,i2+1))

str1="ylqpejqbalahwr"

str2="yrkzavgdmdgtqpg"
i1,i2=0,0
print(Lcs(str1,str2,i1,i2))


  

