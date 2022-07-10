nums=list(map(int,input("Enter the list = ").split()))
target=int(input("Enter the target number = "))
low= 0
a=[]
high = len(nums)-1
c=0
while low<=high:
    if nums[low]==target:
            a.append(low)
            c=1
    if nums[high]==target:
            a.append(high)
            c=1

    mid=(low+high)//2

    if nums[mid]==target:
        a.append(mid)
        c=1
        high=mid-1

    elif nums[mid]>target:
        high=mid-1
        


    elif nums[mid]<target:
        low=mid+1
        
if len(nums)==1:
    if  nums[0]==target:
        print([0,0])
    else:
        print([-1,-1])


elif c==0:
    print([-1,-1])
else:

    dict={}
    for i in a:
        if i in dict:
            dict[i]+=1
        else:
            dict[i]=1
    a=[]
    for key,value in dict.items():
        a.append(key)
    if len(a)==1:
        print (a.append(0))
    else:
        print (a)