#input array
list1=list(map(int,input("Enter the list=").split()))
max=0
for i in range(len(list1)):
    for j in range(i+1,len(list1)):
        if list1[j]>list1[i] and j-i>max:
                max=j-i

print(max)



