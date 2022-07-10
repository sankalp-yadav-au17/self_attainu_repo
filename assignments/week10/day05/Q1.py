'''
(Maximum marks -15)
Q-1 ) Given a list, Write a brute force approach without using stacks(using
for loops, so that you can appreciate the beauty of stacks) to find the just
larger element on the right of the element, for each element.
And for last element, since there is no element on the right give “None”:
(5 marks)
(Easy)
Example 1:
Input: [2,1,7,4,6,8,1,9]
Output: [7,7,8,6,8,9,9,None]
'''

Input=list(map(int,input("Enter the list=").split()))
A=[]

for i in range(len(Input)):
    if i==len(Input)-1:
        A.append(None)
    
    for j in range(i+1,len(Input)):
        if Input[j]>Input[i]:
            A.append(Input[j])
            break

print(A)


# using stack
# Input=list(map(int,input("Enter the list=").split()))
# max = float('inf')
# stack=[]
# for i in range(len(Input)):

