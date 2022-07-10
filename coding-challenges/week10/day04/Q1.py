'''
Q-1 ) Valid Parentheses:
https://leetcode.com/problems/valid-parentheses/
(5 marks)
(Easy)
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if
the input string is valid.
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
Example 1:
Input: s = "()"
Output: true
'''

def paranthe(s):

    dict={")":"(","]":"[","}":"{"}
    list1=[]
    open=['(','[','{']

    for i in s:
        if i in open:
            list1.append(i)

        else:
            if len(list1)>0:
                if dict[i]!=list1.pop():
                    return False
            else:
                return False

    if list1 == []:
        return True
    else:
        return False



s=input("Enter the string = ")
print(paranthe(s))