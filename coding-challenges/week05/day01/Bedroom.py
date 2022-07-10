'''
The Bedroom object has the following methods:
• carpet_area(): Returns the carpet area of the room which is calculated as 
length*breadth
• add_bed(): creates a Bed object using user inputs [using input() function]
and assigns it to the bed attribute of the bedroom 
• add_closet(): creates a Closet object using user inputs [using input() 
function] and assigns it to the closet attribute of the bedroom
• remove_bed(): Checks if the bed attribute is None. If not, then makes it None and returns “bed removed from the room”. If bed attribute is already 
None, then it returns “No bed found in the room”.
• remove_closet(): Checks if the closet attribute is None. If not, then 
makes it None and returns “closet removed from the room”. If closet 
attribute is already None, then it returns “No closet found in the room”
'''



class Bedroom:
    def __init__(self):
        self.length=10
        self.breadth=10
        self.height=10
        self.bed=None
        self.closet=None
        self.has_balcony=True
        self.has_window=True
        self.num_lights=10
        self.has_ac=5
        self.has_fan=10
        self.num_charging_points=10

    def carpet_area(self):
        return self.length*self.breadth

    def add_bed(self,n):
        self.bed=n
    
    def add_closet(self,ad):
        self.closet=ad

    def remove_bed(self):
        if self.bed=="None": # its checking
            return "No bed found in your room"
        else:
            self.bed=None # transfering value form left to right 
            return "Bed removed from your room"

    def remove_closet(self):
        if self.closet=="None":
            return "No closet found in the room"
        else:
            self.closet=None
            return "closet removed from the room"




b=Bedroom()
b.add_bed(input("Enter number of bed="))
print("Number of beds=",b.bed)

b.add_closet(input("Enter number of closet="))
print("Number of closet=",b.closet)

print(b.remove_bed())

print(b.remove_closet())


