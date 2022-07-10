'''
Q-2 ) Program for Sum of the digits of a given number:(5 marks)
Sample Input:
1234567
Sample output:
28
'''
def sumofthedigits(arr,sum):
    sum=sum+int(arr.pop())
    if arr==[]:
        return sum
    return sumofthedigits(arr,sum)


if __name__=="__main__":
    sum=0
    arr=list(input("Enter the number"))
    print(sumofthedigits(arr,sum))