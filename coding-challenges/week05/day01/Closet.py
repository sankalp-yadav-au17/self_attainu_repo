'''
1. The Closet Object has the following attributes:
length: length of the closet in feet
breadth: breadth of the closet in feet
height: breadth of the closet in feet
max_capacity: Total number of items that a closet supports
items: The list of items in the closet. [All strings] 
2. The Closet Object supports the following methods:
store_item(): Takes a string as input and adds it to the items list 
fetch_item(): Returns the frontmost object in the items list

'''

class Closet:
    def __init__(self):
        self.length= 5
        self.breadth=5
        self.height= 7
        self.max_capacity= 50 
        self.items=["files","clothes"]
        

    def store_item(self):
        a=input("Enter a string=")
        
        self.items.append(a)
        

    def fetch_item(self):
        return self.items.pop(0)

c=Closet()
c.store_item()
print("items=",c.items)
print("returning frontmost object is=",c.fetch_item())
print("items=",c.items)
print(type(c))