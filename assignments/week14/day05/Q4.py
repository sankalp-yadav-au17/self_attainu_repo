'''
Q-4) Remove Duplicates from Sorted List
(3.75 marks)
https://leetcode.com/problems/remove-duplicates-from-sorted-list/
(Easy)
Given the head of a sorted linked list, delete all duplicates such that each
element appears only once. Return the linked list sorted as well.
Example 1:Input: head = [1,1,2]
Output: [1,2]'''

class Node:
    def __init__(self,x):
        self.val=x
        self.next=None

def remove_node(head):
    if head is None:
        return 
    cur=head
    while cur.next!=None:
        if cur.next.val==cur.val:
            cur.next=cur.next.next
        else:
            cur = cur.next


head=Node(1)
head.next=Node(1)
head.next.next=Node(2)
remove_node(head)