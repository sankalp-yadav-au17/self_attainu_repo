'''
Q-2 )Kth Largest Element in a Stream
(5 marks)
https://leetcode.com/problems/kth-largest-element-in-a-stream/
(Easy)
Design a class to find the kth largest element in a stream. Note that it is the
kth largest element in the sorted order, not the kth distinct element.
Implement KthLargest class:● KthLargest(int k, int[] nums) Initializes the object with the integer k
and the stream of integers nums.
● int add(int val) Returns the element representing the kth largest
element in the stream.
Example 1:
Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]
Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3); // return 4
kthLargest.add(5); // return 5
kthLargest.add(10); // return 5
kthLargest.add(9); // return 8
kthLargest.add(4); // return 8
'''



def __init__(self, k: int, nums: List[int]):
        nums = heapq.nlargest(k, nums)
        heapq.heapify(nums)
        self.heap = nums
        self.k = k
        
    def add(self, val: int) -> int:
        if len(self.heap) < self.k:
            heapq.heappush(self.heap, val)
        elif val > self.heap[0]:
            heapq.heapreplace(self.heap, val)
        return self.heap[0]