'''
Question 3. Write a program to find the length of a string using
recursion.
'''


def length(string,count):
    if string == []:
        return count
    string.pop()
    count=count+1
    return length(string,count)

string=list(input("Enter a string ="))
count=0
print(length(string,count))

'''
time complexity = O(n)
space complexity=O(n)
'''

