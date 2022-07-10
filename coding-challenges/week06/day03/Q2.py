"""
Question : 2 -
Given a number , find if the number is a perfect square root or not ? --- Marks :-5
Also , find Time and space Complexity
example :
Input : n = 4
output : - True
Input : n = 10
output : - False
Explanation : since square root (4) =2 (perfect square ) --true
Square root(10) = 3.35 (Not perfect square) -- false
Sample :
Def find_perfect_square(N):
# write code here
"""


def perfect_square(n):
    if n==0:
        return f"valid message"
    for i in range(1,n//2 +1):
        if i*i==n:
            return True
        else:
            continue
    else:
        return False

print(perfect_square(int(input("Enter a number="))))


'''
Time complexity of above program is O(n)
Space complexity of above program is O(n)
'''
