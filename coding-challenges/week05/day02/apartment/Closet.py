class Closet:
    def __init__(self,length, breadth,height,max_capacity,items):
        self.length=length
        self.breadth=breadth
        self.height=height
        self.max_capacity=max_capacity
        self.items= items

    def store_item(self):
        a=input("Enter a list=")
        self.items.append(a)

    def fetch_item(self):
        return self.items.pop(0)

    


closet=Closet(7,3,10,10,["tie","watch","shoes","clothes"])

closet.store_item()
# print("ye hai aam zindagi",closet.items)
closet.fetch_item()
# print("ye hai mentos zindagi ",closet.items)
