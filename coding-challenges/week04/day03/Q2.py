'''
Write a function called MaxSeq() which can take any number of inputs from the 
user and returns the highest number in that sequence as the output.
[You cannot use the inbuilt function max() of python]
Ex:
Input 1:
11 2 3 4
Output 1:
11
Input 2:
1 2 3 8 7
Output 2:
8
'''

def maxi(list1):
    max1=0
    for i in range(0,len(list1)):
        if list1[i]>max1:
            max1=list1[i]

    print(max1)
    list1.remove(max1)

    print(list1)

list1=[]
a=int(input("Enter the number of sequence="))
for l in range(1, a+1):
    element=int(input("Enter input="))
    list1.append(element)
print(list1)
maxi(list1)
