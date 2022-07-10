'''
Q-2 )Write steps in heapify/percolate down method, and write time
complexity and space complexity analysis
'''
Check if a tree is  BST not?
>to check if a tree is BST or not its node left should be smaller than the node and node right should be bigger than the node, recursively.

>if either one of the nodes is none then put -infinity if it is a left node or +infinity if it is a right node.

>according to the rules of BST left sub-tree should be smaller and the right sub-tree should be bigger than the node. So, the node lies between the max of the left sub-tree and the min of the right sub-tree.

>when we want to make max heap we need max number to the top. So, we swap the max number to the top.

>sometimes even after the max heap, we cannot achieve max heap we will do PERCULATE means again swapping of the number to the top.

>In heapify time complexity is O(logn)