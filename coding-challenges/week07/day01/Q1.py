def Decimal_to_Binary(number):
    output=""
    while number!=0:
        remainder=number%2
        output=output+str(remainder)
        number=number//2
    return output[::-1]


print(Decimal_to_Binary(int(input("Enter a decimal number="))))

"""
Time Complexity = O(n)
Space Complexity = O(1)
"""
