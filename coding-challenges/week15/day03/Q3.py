s=input("Enter the string=")
dict={}
for i in s:
    if i in dict:
        dict[i]+=1
    else:
        dict[i]=1
# print(dict)
maxval=0
maxkey=''
sum=0
for key,value in dict.items():
    if value>maxval and value%2==1:
        maxval=value
        maxkey=key
    if value%2==0:
        sum+=value
sumodd=0
for key,value in dict.items():
    if key!=maxkey and value%2==1:
        sumodd+=(value-1)
print(sum+maxval+sumodd)