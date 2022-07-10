'''
Q-1 ) Dry run the recursive function “ reverse_LL_rec(head prev) ” from the
code given below, take input provided in the code:
(5 marks)
(Super Easy)
'''

"""
5->15->25->35
head=5 prev=None
    ^
    |
head.next=None return 5
None<-5
__________________________
head=15 prev=5
    ^
    |
head.next=5 return 15
5<-15
___________________________
head=25 prev=15
    ^
    |
head.next=15 reuturn 25
15<-25
___________________________
head=35 prev=25
    ^
    |
head.next=25 return 35
25<-35
___________________________

Answer:
None<-5    <-  5<-15   <-  15<-25  <-  25<-35
"""