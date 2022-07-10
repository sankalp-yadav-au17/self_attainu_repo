'''
(Maximum marks -15)
Q-1 ) Write a program to remove first node from a linked list:
(5 marks)
(Super Easy)
Example 1:
Input(elements in linked list)
2
5
6
8
3
Output(elements after removing head of the linked list)
5
6
8
3
'''
class Node:
    def __init__(self,x):
        self.data=x
        self.next=None

head=None

def add_node_end(x):

    global head
    if head == None:
        head= Node(x)
        return
    cur=head
    while cur.next!=None:
        cur=cur.next    
    cur.next=Node(x)

def print_LL():
    global head
    cur=head
    c=1
    while cur.next!=None:
        if c==2:
            head=cur
            break
        c+=1
        cur=cur.next
    while cur.next!=None:
        print(cur.data)
        cur=cur.next
    print(cur.data)



add_node_end(2)
add_node_end(5)
add_node_end(6)
add_node_end(8)
add_node_end(3)
print_LL()