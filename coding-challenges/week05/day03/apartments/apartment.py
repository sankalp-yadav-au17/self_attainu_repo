from flat import flat
class Apartment:
    def __init__(self,flats,builder_name,amneties,parking_spots,number_floors,maintenance_monthly,has_elevator,num_stairs,fire_safety):
        self.flats=flats
        self.builder_name=builder_name
        self.amneties=amneties
        self.parking_spots=parking_spots
        self.number_floors=number_floors
        self.maintenance_monthly=maintenance_monthly
        self.has_elevator=has_elevator
        self.num_stairs=num_stairs
        self.fire_safety=fire_safety

    def rent_flat(self):
        a=0
        j=0
        if self.has_elevator==True:
            a=a+500
        if self.fire_safety==True:
            a=a+500
        for i in self.amneties:
            j=j+1
        a=a+(500*j)
        a=a+self.maintenance_monthly
        return flat.rent_out()+a

    def issue_parking_spot(self):
        if self.parking_spots!=0:
            self.parking_spots-=1
            return f"Issued"
        else:
            return f"Not available"

    def revoke_parking_spot(self,flat):
        
        if flat=="A" or flat=="B" or flat=="C":
            self.parking_spots=self.parking_spots-1
            return f"You have the permission to park the car"

       

apartment=Apartment(["A","B","C"],"Sankalp",["gym","light","fan"],3,5,1000,True,4,True)
print(apartment.rent_flat())

print(apartment.issue_parking_spot())

print(apartment.revoke_parking_spot(input("Enter flat A,B,C=")))

