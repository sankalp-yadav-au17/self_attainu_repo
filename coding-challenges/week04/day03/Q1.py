'''
Write a function which takes a list as an input from the user [using the input()
command] and returns the highest and the second highest elements of a list.
Ex:
Input 1:
1 2 3 4
Output 1:
3 4
Input 2:
1 2 3 8 7
Output 2:
7 8
'''

def maxi(list1):
    max1=0
    max2=0
    for i in range(0,len(list1)):
        if list1[i]>max1:
            max1=list1[i]
    for i in range(0,len(list1)):
        if list1[i]>max2 and list1[i]<max1:
            max2=list1[i]

    print(max2, max1)
    list1.remove(max1)
    list1.remove(max2)
    print(list1)


a=input("Enter the number of sequence=")
b=a.split(" ")
for i in range(0,len(b)):
    b[i]=int(b[i])
print(type(b[0]))
maxi(b)
