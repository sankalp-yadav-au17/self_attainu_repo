'''
a. Using break/continue on a nested loops of days and weeks (which you 
take as user input), skip out on the even days of all odd weeks.
'''


n = int(input("Enter the weeks: "))
for week in range (1,n+1):
    for day in range(1,8):
        if week%2==1 and day%2==0:
            continue
        else:
            print ("Week- ",week,"Day- ",day)