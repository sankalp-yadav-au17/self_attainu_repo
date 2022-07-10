'''
Q-2 ) Palindrome Linked List
https://leetcode.com/problems/palindrome-linked-list/
(Easy)
5612
448
Add to List
Share
Given the head of a singly linked list, return true if it is a palindrome.
(5 marks)Example 1:
Input: head = [1,2,2,1]
Output: true
Example 2:
Input: head = [1,2]
Output: false
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.next=None

head=None
def add_node_end(x):
    global head
    if head ==None:
        head=Node(x)
        return

    cur= head
    while cur.next!=None:
        cur=cur.next
    cur.next=Node(x)

def man(arr):
    global head

    cur=head 
    while cur.next!=None:
        if arr.pop()==cur.val:
            cur=cur.next
        else:
            return False
    return True
    



arr=list(map(int,input("Enter the list= ").split()))
for i in arr:
    add_node_end(i)

print(man(arr))