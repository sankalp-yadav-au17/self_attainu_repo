'''
Q-3 ) Merge In Between Linked Lists
(5 marks)
https://leetcode.com/problems/merge-in-between-linked-lists/
(Medium)
You are given two linked lists: list1 and list2 of sizes n and m respectively.
Remove list1's nodes from the ath node to the bth node, and put list2 in their
place.
The blue edges and nodes in the following figure incidate the result:Build the result list and return its head.
Example 1:
Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [0,1,2,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their
place. The blue edges and nodes in the above figure indicate the result
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.next=None
        
        
def manipulate(head1,head2,a,b):
    cur2=head2
    p1=1
    while cur2.next!=None:
        if cur2.val==a:
            break
        p1+=1
        cur2=cur2.next
    
    p2=1
    cur2=head2
    while cur2.next!=None:
        if cur2.val==b:
            break
        p2+=1
        cur2=cur2.next
    
    cur2=head2
    c=1
    while cur2.next!=None:
        if c==p1:
            break
        c+=1
        cur2=cur2.next
    prev=cur2.next
    cur2.next=head1
    
    d=1
    while prev.next!=None:
        if d<=p2-p1:
            prev=prev.next
            d+=1
    cur1=head1
    while cur1.next!=None:
        cur1=cur1.next
    cur1.next=prev

def printLL():
    cur2=head2
    while cur2!=None:
        print(cur2.val)
        cur2=cur2.next

a,b=2,5

head1=Node(100)
head1.next=Node(101)
head1.next.next=Node(102)
head1.next.next.next=Node(103)
head1.next.next.next.next=Node(104)

head2=Node(0)
head2.next=Node(1)
head2.next.next=Node(2)
head2.next.next.next=Node(3)
head2.next.next.next.next=Node(4)
head2.next.next.next.next.next=Node(5)
head2.next.next.next.next.next.next=Node(6)
manipulate(head1,head2,a,b)
printLL()