'''
b. Using break/continue on a nested loops of days and weeks (which you 
take as user input), encounter the scenario where we miss the first 2 
classes ever and still complete the syllabus one week before the end

ex-week 3 classes 4
doubt- what if the week starts from 3 to 6 also 3 weeks 
'''
n=int(input("Enter number of weeks: "))
for week in range (1,n+1):
    for day in range(1,8): # instead of one I started loop from 2 (2 classes missed LOL!)
        if week==1 and day<=2: #1,2 is skipped
            continue
        else: #4,6
            if day%2==0:
                print("Week-",week,"Day-",day,"Class")
          
            else: #1,3,5,7
                print("Week-",week,"Day-",day,end=" ")
                print("No class")
    if week==n-1: #came out of week loop 
        break

