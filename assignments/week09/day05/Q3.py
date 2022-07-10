'''
Q - 3 ) Valid Anagram (5 Marks):
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
Input: s = "rat", t = "car"
Output: false
'''
s=input("Enter the string = ")
t=input("Enter the string = ")
c=0
for i in s:
    if i not in t:
        print(False)
        c=1
        break

if c==0:
    print(True)


        

