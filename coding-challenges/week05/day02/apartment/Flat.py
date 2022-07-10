from Bedroom import bedroom
class Flat:
    def __init__(self,rent,current_renter,cost):
        self.rent=rent
        self.cost=cost
        self.current_renter=current_renter

    def rent_out(self):
        if self.rent=="Yes":
            a=input("Do you wanna pay?=")
            if a=="Y" or "yes" or "Yes" or "y":
                name=input("Enter your name=")
                self.current_renter=name
                return self.current_renter
        else:
            self.cost=5*(bedroom.length*bedroom.breadth)
            return f"{self.cost} per month"


flat=Flat("Yes",None)
print(flat.rent_out())