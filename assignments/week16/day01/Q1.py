'''
Q1) Create a Vehicle class with max_speed and mileage instance attributes'''


class Vehicle:
    def __init__(self, name, mileage, capacity):
        self.name = name
        self.mileage = mileage
        self.capacity = capacity
        
    def fare(self):
        return self.capacity * 100


class Bus(Vehicle):
    
    def act_fare(self):
        fare_charge = self.fare()+ (10 * self.fare())/100
        return fare_charge
    



School_bus = Bus("School Volvo", 12, 50)
print("Total Bus fare is:", School_bus.act_fare())
