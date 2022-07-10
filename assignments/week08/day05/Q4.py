'''
Q - 4 ) Check If N and Its Double Exist:
https://leetcode.com/problems/check-if-n-and-its-double-exist/
'''
arr=list(map(int,input("Enter the list= ").split()))
if arr.count(0)>1:
    print(True)
else:
    for i in arr:
        if 2*i in arr:
            if i!=0:
                print(True)
    print(False)