'''
Q-2 ) Write postorder and inorder traversal function for the tree given
below, including declaring classes, providing input and perform the dry run
also.
(5 marks)
'''

class Node:
    def __init__(self,x):
        self.data=x
        self.left=None
        self.right=None

def postorder(root):
    if root is None:
        return
    postorder(root.left)
    postorder(root.right)
    print(root.data)

def inorder(root):
    if root is None:
        return
    inorder(root.left)
    print(root.data)
    inorder(root.right)

def preorder(root):
    if root is None:
        return
    print(root.data)
    preorder(root.left)
    preorder(root.right)




root=Node(3)
root.left=Node(4)
root.right=Node(5)
root.left.left=Node(5)
root.left.right=Node(4)
root.right.right=Node(7)

print("Preorder")
print(preorder(root))
print()

print("Inorder")
print(inorder(root))
print()

print("Postorder")
print(postorder(root))
print()


