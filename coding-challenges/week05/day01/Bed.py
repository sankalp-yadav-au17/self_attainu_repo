'''
Make 3 classes Beds, Closets and Bedrooms with the following specifications:

1. The Bed Object has the following attributes:

length: length of the bed in feet

breadth: breadth of the bed in feet

year_made: Year in which the bed was made

has_headboard: True or False depending on whether the bed has a headboard or not

has_posts: True or False depending on whether the bed has sideposts or not

material: material is wood, steel, plywood and so on.

2. The Bed Object does not support any following methods
'''


class Bed:
    def __init__(self):
        self.length = 10
        self.breadth = 20
        self.year_made = 1996
        self.has_headboard = True
        self.has_post = False
        self.materal = "wood"

b=Bed()
print(b.length)
print(type(b))

    

