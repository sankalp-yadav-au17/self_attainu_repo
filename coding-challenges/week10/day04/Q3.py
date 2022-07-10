'''
Q-3 )Remove All Adjacent Duplicates In String
(5 marks)
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
(Easy)
You are given a string s consisting of lowercase English letters. A duplicate
removal consists of choosing two adjacent and equal letters and removing them.
We repeatedly make duplicate removals on s until we no longer can.
Return the final string after all such duplicate removals have been made. It can
be proven that the answer is unique.
Example 1:Input: s = "abbaca"
Output: "ca"
Explanation:
For example, in "abbaca" we could remove "bb" since the letters are
adjacent and equal, and this is the only possible move. The result of this move is
that the string is "aaca", of which only "aa" is possible, so the final s
'''

s= input("Enter the list= ")
A=[]
for i in s:
    
    if A==[]:
        A.append(i)
    elif i ==A[len(A)-1]:
        A.pop()
    else:
        A.append(i)
    

print("".join(A))

