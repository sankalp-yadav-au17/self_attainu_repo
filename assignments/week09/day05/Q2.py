'''
https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
Given an array of unique integers salary where salary[i] is the salary of the
employee i.
Return the average salary of employees excluding the minimum and maximum
salary.Example 1:
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000
respectively.
Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500
'''
salary = list(map(int,input("Enter the list = ").split()))
salary.sort()
avg = sum(salary[1:-1]) /(len(salary[1:-1]))
print(avg)