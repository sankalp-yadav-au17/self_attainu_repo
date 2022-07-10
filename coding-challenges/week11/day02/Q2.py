'''
Q-2 ) Convert Binary Number in a Linked List to Integer:
(5 marks)
https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
(Easy)
Given head which is a reference node to a singly-linked list. The value of each
node in the linked list is either 0 or 1. The linked list holds the binary
representation of a number.
Return the decimal value of the number in the linked list.
Example 1:Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
'''
class Node:
    def __init__(self,x):
        self.data=x
        self.next=None

head=None
def add_node_end(x):
    global head
    if head==None:
        head=Node(x)
        return
    cur=head
    while cur.next!=None:
        cur=cur.next
    cur.next=Node(x)

def manipulate():
    global head
    cur=head
    length=0
    while cur.next!=None:
        length +=1
        cur=cur.next
    cur=head
    decimal=0
    while cur.next!=None:
        decimal+=cur.data * (2**length)
        length-=1
        cur=cur.next
    decimal+=cur.data * (2**length)

    return decimal




add_node_end(1)
add_node_end(0)
add_node_end(1)
print(manipulate())