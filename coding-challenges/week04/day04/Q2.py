'''
Create a dictionary that stores the following key value pairs:
(Name, Area): Phone Number

Populate this dictionary using user inputs as shown below:

Input:
Priyesh Shubham Megha Manish Vaibhav
Vadodara Bangalore Bangalore Bangalore Bangalore
9768576543 9736857654 9768576354 9768537654 9736857654

Output:
{(Priyesh,Vadodara): 9768576543, (Shubham,Bangalore): 9736857654, 
(Megha,Bangalore): 9768576354, (Manish,Bangalore): 9768537654 
(Vaibhav,Bangalore): 9736857654}
'''
names = input("Enter names with spaces=").split()
area = input("Enter area with spaces=").split()
phone = input("Enter phone with spaces=").split()
User_input={}

for i in range(0,len(phone)):
    User_input[names[i],area[i]]=int(phone[i])


print(User_input) 