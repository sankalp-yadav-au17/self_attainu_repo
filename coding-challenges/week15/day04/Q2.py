'''
Q-2) Longest Substring Without Repeating Characters
(5 marks)
https://leetcode.com/problems/longest-substring-without-repeating-charact
ers/
(Medium)Given a string s, find the length of the longest substring without repeating
characters.
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
'''
def substing(s):
    if s=="":
        return 0
    arr=[]
    count=[]
    for i in range(len(s)):
        for j in range(i,len(s)):
            if s[j] in arr:
                count.append(len(arr))
                arr=[]
                break
            else:
                arr.append(s[j])
        count.append(len(arr))
    return max(count)


print(substing(input("Enter the string= ")))