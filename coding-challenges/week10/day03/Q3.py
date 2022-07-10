'''
Q-3 )Write a function to perform XOR between two positive integers: (5
marks), do not use the xor operator.
(Easy)
Sample Input:
A = 5
B = 3Sample Output:
A^B = 6
explanation:
Take two inputs A and B as integers.
Convert them to binary,
perform XOR operation,
return resultant binary number as decimal number .
Marks distribution:
Question 1,2 and 3 carry 5 marks each.
=> A = 5 , B = 3
=> A = 101, B = 011
=> A^B = 110
=> (110) 2 = (6) 10
'''
#to convert integer to binary
def con(c):
    sum=""
    while c>0:
        rem=c%2
        sum+=str(rem)
        c=c//2
    return int(sum)

#converting binary to integer
def output(st):
    A=[]
    for i in st:
        A.append(int(i))
    sum=0
    for i in range(len(A)):
        sum+=int(A.pop()) * (2**i)
    return sum


# doing xor operation
def xor(A,B):
    maximum=max(len(A),len(B))
    A=A[::-1]
    B=B[::-1]
    if len(A)!=maximum:
        mak=maximum-len(A)
        for i in range(mak):
            A+='0'
        
    if len(B)!=maximum:
        mak=maximum-len(B)
        for i in range(mak):
            B+='0'
    C=[]
    for i in range(maximum):
        if A[i]=='0' and B[i]=='0':
            C.append('0')
        if A[i]=='0' and B[i]=='1':
            C.append('1')
        if A[i]=='1' and B[i]=='0':
            C.append('1')
        if A[i]=='1' and B[i]=='1':
            C.append('0')
    D=''.join(C)

    return D[::-1] 
        
        
        


A,B=int(input()),int(input())
C=xor(str(con(A)),str(con(B)))   
print(output(str(C)))