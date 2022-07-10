'''
Q-3 ) Reverse a string using recursion:(5 marks)
If we have a string, write a function that prints reverse of that string, using
recursion.
Sample Input:
ABCD
Sample Output:
DCBA
'''
def reverse(input1,output):
    if input1==[]:
        return output
    output+=input1.pop()
    return reverse(input1,output)

input1=list(input("Enter the string = "))
output=''
print(reverse(input1,output))
