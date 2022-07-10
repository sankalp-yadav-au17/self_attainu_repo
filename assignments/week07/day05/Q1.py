def count_bits(decimal):
    sum=0
    while decimal!=0:
        rem=decimal%2
        sum=sum+rem
        decimal=decimal//2
    return sum


decimal=int(input("Enter a number = "))
print(count_bits(decimal))


"""
time complexity = O(logn)
space complexity= O(1)
"""