'''
Q-2 ) Jewels and StonesJewels and Stones: (5 marks)
https://leetcode.com/problems/jewels-and-stones/
You're given strings jewels representing the types of stones that are jewels, and
stones representing the stones you have. Each character in stones is a type of
stone you have. You want to know how many of the stones you have are also
jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
Example 1:Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
'''
c=0
stones=input("Enter the stones = ")
jewels=input("Enter the  jewels = ")
for i in range(len(jewels)):
    for j in range(len(stones)):
        if jewels[i]==stones[j]:
            c+=1
            # stones.replace(stones[j],'')
print(c)