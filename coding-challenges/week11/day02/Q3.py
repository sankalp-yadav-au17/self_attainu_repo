'''
Q-3 ) Middle of the Linked List
(5 marks)
https://leetcode.com/problems/middle-of-the-linked-list/
(Medium)
Given a non-empty, singly linked list with head node head, return a middle node
of linked list.
If there are two middle nodes, return the second middle node.
Example 1:
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3. (The judge's serialization of this node is
[3,4,5]).
Note that we returned a ListNode object ans, such that:ans.val
'''
class Node:
    def __init__(self,x):
        self.val=x
        self.next=None

head=None
def add_node_end(x):
    global head
    if head == None:
        head=Node(x)
        return

    cur=head
    while cur.next!=None:
        cur=cur.next
    cur.next=Node(x)

def manipulate(n):
    global head
    n=n//2
    c=0
    cur=head
    while cur.next!=None:
        if c==n:
            head=cur
            break
        c+=1
        cur=cur.next
    A=[]
    while cur.next!=None:
        A.append(cur.val)
        cur=cur.next
    A.append(cur.val)
    return A


arr=list(map(int,input().split()))
for i in arr:
    add_node_end(i)
print(manipulate(len(arr)))
