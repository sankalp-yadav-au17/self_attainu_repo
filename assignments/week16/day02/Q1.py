'''
Write a function to find the longest common prefix string
amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Constraints:
strs[i] consists of only lower-case English letters.'''


def LCP(strs):
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
                # print("")
                p2=1
                break
            else:
                continue
        if p2==0:
            p1+=1
            B+=A
        else:
            break

    return B

# strs = list(input("Enter the list = ").split())
strs = ["flower","flow","flight"]
print(LCP(strs))