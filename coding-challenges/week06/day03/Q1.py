"""
Question 1 :
---------------
Write a Program to swap values , without using 3rd variable .
Also find Time and Space Complexity --- Marks : - 5
Example : -
Input : -
A = 20 , B = 10
Output : - A = 10 , B = 20
Explanation : - values has been swapped
Sample :
Def swap(A,B):
#write code here
"""





def Swap(a,b):
    a,b=b,a
    return f"The number of A is {a} and the number of B is {b}"


print(Swap(int(input("Enter a number of A=")),int(input("Enter a number of B="))))
print("Therefore the values have been swapped")

"""
Time Complexity of this program is O(1)
And Space Complexity of this program is O(1)
"""

