'''
Q-1 ) Write a program to convert a string of binary number into a decimal
number:
(5 marks)
(Easy)
eg:
Sample Input
st = “101”
Sample output
5
Revise the lecture to see the algorithm to convert binary to decimal
'''

st=list(input("Enter the string= "))
sum=0
for i in range(len(st)):
    sum+=int(st.pop()) * (2**i)
print(sum)


