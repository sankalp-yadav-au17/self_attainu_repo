from bedroom import bedroom
class Flat:
    def __init__(self,bed_rooms,bath_rooms,kitchens,owner_name,current_renter,has_parking_permission):
        self.bed_rooms=bed_rooms
        self.bath_rooms=bath_rooms
        self.kitchens=kitchens
        self.owner_name=owner_name
        self.current_renter=current_renter
        self.has_parking_permission=has_parking_permission


    def rent_out(self,a=0):
        rent=input("Are you on rent=")
        if rent=="Yes" or rent=="yes" or rent=="y" or rent=="Y":
            return f"Occupied"
                
        else:
            cost=5*(bedroom.length*bedroom.breadth)
            return cost
            a=input("Do you wanna pay?=")
            if a=="Y" or "yes" or "Yes" or "y":
                name=input("Enter your name=")
                self.current_renter=name
                #return self.current_renter



flat=Flat([],[],[],None,None,False)
print(flat.rent_out())