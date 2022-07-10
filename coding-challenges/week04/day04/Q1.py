'''
Consider a list (list = []). You can perform the following commands:
1. insert i e: Insert integer e at position i .
2. print: Print the list.
3. remove e: Delete the first occurrence of integer e.
4. append e: Insert integer e at the end of the list.
5. pop: Pop the last element from the list.
6. reverse: Reverse the list.
Initialize your list and read in the value of n followed by n lines of commands 
where each command will be of the types listed above. Iterate through each 
command in order and perform the corresponding operation on your list.
Example:
N = 4
append 1
append 2
insert 1 3
print
append 1: Append to the list, arr=[1].
append 2: Append to the list, arr=[1,2].
insert 1 3: Insert 3 at index 1, arr=[1,3,2].
print: Print the array.
Output:
[1, 3, 2]
Input Format
The first line contains a number n , denoting the number of commands.
Each line i of the n subsequent lines contains one of the commands described 
above.
Output Format
For each command of type print, print the list on a new line.
Input 1:
11
insert 0 5
insert 1 10
insert 0 6
print
remove 6
append 9
append 1
print
pop
reverse
print
Output 1:
[6, 5, 10]
[5, 10, 9, 1]
[9, 10, 5]
'''

L=[]
n=11
a=0
L.insert(0,5)
a+=1
L.insert(1,10)
a+=1
L.insert(0,6)
a+=1
print(L)
a+=1
L.remove(6)
a+=1
L.append(9)
a+=1
L.append(1)
a+=1
print(L)
a+=1
L.pop()
a+=1
L.reverse()
a+=1
print(L)
a+=1
print("N and number of command is=",bool(n==a))

