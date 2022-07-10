from bed import bed
class Kitchen:
    def __init__(self,length,breadth,slab, sink,hasslab,furnishing,lpg):
        self.length=length
        self.breadth=breadth
        self.slab_material=slab
        self.has_sink=sink
        self.has_slab=hasslab
        self.furnishing_material=furnishing
        self.lpg_pipeline=lpg

    def cook(self):
        if self.lpg_pipeline and self.has_slab and self.has_sink:
            return f"Kitchen can be used for cooking"
        else:
            return f"Kitchen cannot be used for cooking"

        

kitchen=Kitchen(bed.length,bed.breadth,"granite",True,True,"wood",True)
print(kitchen.cook())

