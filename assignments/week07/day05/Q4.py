'''
Q4.
Write a program to compute the power of a number.
Input - x = 10 , y = 5 , calculate = (x^y)
Output : - 100000
Example -
pow(n, 5) will give you n to the power 5. Use recursion in it.
def pow(x,y):
#write code here
--------------------------------
'''



def pow(x,y,a):
    a=a*x
    if y==1:
        return a
    return pow(x,y-1,a)
    


x=int(input("Enter a number = "))
y=int(input("Enter the power = "))
print(pow(x,y,a=1))