'''Q-1 ) Design Tiny Url and explain all the steps and estimations. (5 marks)
Q-2 ) First Unique Character in a String
(5 marks)
https://leetcode.com/problems/first-unique-character-in-a-string/
(Easy)
Given a string s, find the first non-repeating character in it and return its index. If
it does not exist, return -1.
Example 1:
Input: s = "leetcode"
Output: 0
Example 2:
Input: s = "loveleetcode"
Output: 2
'''
s="loveleetcode"
dict={}
for i in range(len(s)):
    if s[i] not in dict:
        dict[s[i]]=[]
        dict[s[i]].append(s.count(i))
        dict[s[i]].append(i)
print(dict)