nums=list(map(int,input("Enter the list =").split()))
dict={}
for i in nums:
    if i in dict:
        dict[i]=dict[i]+1
    else:
        dict[i]=1
max=0
for key,value in dict.items():
     if value>max:
         max=value
    
print(max)