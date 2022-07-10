'''
Q-1 ) Delete Node in a Linked List
https://leetcode.com/problems/delete-node-in-a-linked-list/
(5 marks)
(Medium)
Write a function to delete a node in a singly-linked list. You will not be given
access to the head of the list, instead you will be given access to the node
to be deleted directly.
It is guaranteed that the node to be deleted is not a tail node in the list.
Example 1:
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list
should become 4 -> 1 -> 9 after calling your function.
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.next=None
    
head = None
def add_node_end(x):
    global head
    if head == None:
        head=Node(x)
        return
    
    cur=head
    while cur.next!=None:
        cur=cur.next
    cur.next=Node(x)

def manipulate(x):
    global head
    cur=head
    c=1
    while cur.val!=x:
       cur=cur.next
       c+=1
    if c==1:
        head=head.next
        return
    else:
        cur=head
        p=1
        while p<c-1:
            cur=cur.next
            p+=1
        prev=cur
        nxt=cur.next.next
    
        prev.next=nxt

def print_LL():
    global head
    cur=head
    while cur.next!=None:
        print(cur.val)
        cur=cur.next
    print(cur.val)




arr=list(map(int,input("Enter the list = ").split()))
node= int(input("Enter the target= "))
for i in arr:
    add_node_end(i)
manipulate(node)
print_LL()