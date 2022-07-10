'''
Question 1. Write a program using recursion to count the number of
vowels in a string.
'''

def Vowels(a,count,i):
    if i==len(a):
        return count
    vowels="aeiou"
    if a[i] in vowels:
        count =count + 1
    return Vowels(a,count,i+1)

# if __name__ =='main':
count=0
i=0
print(Vowels(input("Enter the string = "),count,i))



"""
Time complexity =O(n)
Space Complexity=O(n)
"""