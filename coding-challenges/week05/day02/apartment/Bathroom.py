from Closet import closet
class Bathroom:
    def __init__(self,length,breadth,has_sink,has_bathtub,has_tap,has_shower):
        self.length=length
        self.breadth=breadth
        self.has_sink=has_sink
        self.has_bathtub=has_bathtub
        self.has_tap=has_tap
        self.has_shower=has_shower

    def bathing(self):
        if self.has_tap or self.has_shower or self.has_sink:
            return f"Suitable for bathing"
        else:
            return f"Unsuitable for bathing"
        

bathroom=Bathroom(closet.length,closet.breadth,True,True,True,True)
print(bathroom.bathing())

