'''
Q-2 )Trapping Rain Water
(7.5 marks)
https://leetcode.com/problems/trapping-rain-water/
(Hard)
Given n non-negative integers representing an elevation map where the width of
each bar is 1, compute how much water it can trap after raining.Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by
array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are
being trapped.
Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
(Hint: solve using stacks to precompute L and R list, of max element on right and
max element on left, respectively, for each element. Use formula
min(max_height_Right,max_height_Left)-current_height to get water level.
Use logic of just greatest element on the right question discussed on friday night
class)
'''
total_water_stored=0
height= list(map(int,input().split()))
for idx in range(len(height)):

    mhR=float("-inf")
    for i in range(idx+1,len(height)): #for left
        if height[i]>mhR:
            mhR=height[i]

    mhL=float("-inf")
    for i in range(0,idx): #for right
        if height[i]>mhL:
            mhL=height[i]


    water_stored=min(mhL,mhR)-height[idx]
    
    if water_stored>0:
        total_water_stored+=water_stored

print(total_water_stored)
