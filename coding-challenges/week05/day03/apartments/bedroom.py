from bed import bed
from closet import closet

class Bedroom():
    def __init__(self,length,breadth,height,bed,closet,has_balcony,has_window,num_light,has_ac,has_fan,num_charging_points):

        self.length=length
        self.breadth=breadth
        self.height=height
        self.bed=bed
        self.closet=closet
        self.has_balcony=has_balcony
        self.has_window=has_window
        self.num_lights=num_light
        self.has_ac=has_ac
        self.has_fan=has_fan
        self.num_charging_points=num_charging_points

    def carpet_area(self):
        return self.length*self.breadth

    def add_bed(self):
        input_bed=int(input("Enter number of beds="))
        if bed.length*bed.breadth*input_bed<self.carpet_area(): #-self.add_closet()
            self.bed=input_bed 
            return f"Bed available"
        else:
            self.bed=0
            return f"Bed not available"

    def add_closet(self):
        input_closet=int(input("Enter the number of closet="))
        if closet.length*closet.breadth*input_closet<self.carpet_area(): #-(self.add_bed())
            self.closet=input_closet
            return f"Closet available"
        else:
            self.closet=0
            return f"Closet not available"

    def remove_bed(self):
        if self.bed==None:
            return f"No bed found in the room"
        else:
            self.bed=None
            return f"bed removed from the room"  

    def remove_closet(self):
        if self.closet==None:
            return f"No closet found in the room"
        else:
            self.closet=None
            return f"closet removed from your room" 



bedroom=Bedroom(40,20,10,None,None,True,True,10,True,True,10)

print(bedroom.carpet_area())

print(bedroom.add_bed())
print(bedroom.bed)

print(bedroom.add_closet())
print(bedroom.closet)

print(bedroom.remove_bed())
print(bedroom.bed)

print(bedroom.remove_closet())
print(bedroom.closet)


