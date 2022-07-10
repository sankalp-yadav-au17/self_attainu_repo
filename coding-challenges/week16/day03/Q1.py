'''
1) Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that
each unique element appears only once. The relative order of the elements should be kept the same.'''

arr= [1,1,1,2,2,2,2,3,3,3,34,4,4,45,55]
dict={}
for i in arr:
    if i in dict:
        dict[i]+=1
    else:
        dict[i]=1

arr=[]
for key,value in dict.items():
    arr.append(key)
print(arr)