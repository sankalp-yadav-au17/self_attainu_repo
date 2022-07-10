list1=list(map(int,input("Enter the list=").split()))
n=len(list1)
k=int(input("Enter the value of k="))



frequency={}
for i in list1: 
    if i in frequency:
        frequency[i]=frequency[i]+1
    else:
        frequency[i]=1



output=[]
for i,j in frequency.items():
    if j>n//k:
        output.append(i)
    else:
        continue


print(output)

