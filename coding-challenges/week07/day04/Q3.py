def FindPeak(arr):
    a=[]
    for i in range(0,len(arr)):
        if i==len(arr)-1:
            break
        if arr[i+1]>arr[i]:
            continue
        else:
            a.append(arr[i])
    return a    

arr = list(map(int,input("Enter a number = ").split()))
print(FindPeak(arr))