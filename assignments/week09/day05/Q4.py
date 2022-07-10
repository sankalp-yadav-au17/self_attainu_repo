'''
Q - 4 ) [BONUS QUESTION] Sort Integers by The Power Value (5
Marks):
The power of an integer x is defined as the number of steps needed to transform
x into 1 using the following steps:
● if x is even then x = x / 2
● if x is odd then x = 3 * x + 1
For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 -->
10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).Given three integers lo, hi and k. The task is to sort all integers in the interval [lo,
hi] by the power value in ascending order, if two or more integers have the same
power value, sort them by ascending order.
Return the k-th integer in the range [lo, hi] sorted by the power value.
Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform
into 1 using these steps and that the power of x is will fit in 32 bit signed integer.
Example 1:
Input: lo = 12, hi = 15, k = 2
Output: 13
Explanation: The power of 12 is 9 (12 --> 6 --> 3 --> 10 --> 5 --> 16 --> 8 --> 4 -->
2 --> 1)
The power of 13 is 9
The power of 14 is 17
The power of 15 is 17
The interval is sorted by the power value [12,13,14,15]. For k = 2 answer is the
second element which is 13.
Notice that 12 and 13 have the same power value and we sorted them in
ascending order. Same for 14 and 15.
'''
#function to make the power
def key_pow(i):
    c=0
    while i!=1:    
        if i%2==0:
            i=i//2
            c+=1
        else:
            i=3*i+1
            c+=1
    return c


lo,hi,k = int(input("Enter the lo value = ")),int(input("Enter the hi value = ")),int(input("Enter the k value = "))
value=[]

#we got the list below value=[12,13,14,15]
for i in range (lo,hi+1):
    value.append(i)

#to calculate the power of each element and mapped it into dictionary
#dict1={12:9,13:9,14:17,15:17}
dict1={}
for i in value:
    power=key_pow(i)
    dict1[i]=power
print(dict1)

#sorted the list with key in the ascending order
dict1=dict(sorted(dict1.items(),key=lambda x:x[1],reverse=False))

#printing the kth value
c=0
for key,value in dict1.items():
    c+=1
    if c==k:
        print(key) 







