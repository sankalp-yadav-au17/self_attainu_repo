'''
Q-2 )Remove Duplicates from Sorted List (5 marks)
https://leetcode.com/problems/remove-duplicates-from-sorted-list/
(Easy)
Given the head of a sorted linked list, delete all duplicates such that each
element appears only once. Return the linked list sorted as well.
Example 1:
Input: head = [1,1,2]
Output: [1,2]
Example 2:Input: head = [1,1,2,3,3]
Output: [1,2,3]
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.next=None

head=None
def add_node_end(x):
    global head
    if head==None:
        head= Node(x)
        return

    cur=head
    while cur.next!=None:
        cur=cur.next
    cur.next=Node(x)

def manipulation():
    global head
    cur = head
    copy=None
    while cur.next!=None:
        if cur.val!=copy:
            copy=cur.val
            cur=cur.next
        else:
            prev=cur.next.val
            cur.val=prev
            cur.next=cur.next.next
            
    if cur.val==copy and cur.next==None:
        cur=head
        while cur.next!=None:
            if cur.val==copy:
                cur.next=None
                return
            cur=cur.next
            

def printLL():
    global head
    cur=head
    while cur.next!=None:
        print(cur.val)
        cur=cur.next
    print(cur.val)
    

arr=list(map(int,input("Enter the list=").split()))
for i in arr:
    add_node_end(i)
manipulation()
printLL()