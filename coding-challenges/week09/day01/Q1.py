'''
Q-1 ) Check if a number is Palindrome: (5 marks)
Given an integer, write a function that returns true if the given number is
palindrome, else false.
For example,
Sample input:
12321
Sample output:
palindrome
eg2:
Sample input:
1451
Sample output:
not palindrome.
'''

def palindrome(arr,a):
    a+=arr.pop()
    if arr ==[]:
        return a
    return palindrome(arr,a)
    
    


if __name__ =="__main__":
    arr=input()
    arr1=list(arr)
    a=""
    if palindrome(arr1,a) == arr:
            print("palindrome")
    else:
            print("not palindrome")