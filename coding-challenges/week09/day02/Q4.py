'''
Q-3 ) Write a program perform selection sort using an auxiliary (extra) list,
and tell the time complexity and space complexity of your code. (5 marks)
'''
def selectionsort(arr):
    n=len(arr)
    i=0
    while i < n:
        min_e=arr[i]
        min_e_indx=i

        j=i+1
        while j < n:
            if arr[j] < min_e:
                min_e = arr[j]
                min_e_indx = j
            j+=1
        arr[i] , arr[min_e_indx] = arr[min_e_indx] , arr[i]
        i+=1
        
    return arr

    

arr = list(map(int,input("Enter the list = ").split()))
print(selectionsort(arr))