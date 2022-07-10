"""
4. Write code for the following sequence by taking line number as user input, [using a single loop only] 
n = 5
1 
21 
321 
21 
1
"""
# with for loop
n=int(input("Enter number of line="))
for line in range(1,n//2+n%2+1):
    for rows in range(line,0,-1):
        print(rows,end="")
    print()
    

for line1 in range(n//2,0,-1):
    for rows in range(line1,0,-1):
        print(rows,end="")
    print()
        
# with while loop
n=int(input("Enter a line="))
line=1
while line<(n//2+n%2+1):
    rows=line
    while rows>0:
        print(rows,end="")
        rows=rows-1
    line=line+1
    print()

line1=(n//2)
while line1>0:
    rows=line1
    while rows>0:
        print(rows,end="")
        rows=rows-1
    line1=line1-1
    print()





