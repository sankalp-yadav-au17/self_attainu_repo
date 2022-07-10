'''
Q-1 ) LRU Cache
(3.75 marks)
https://leetcode.com/problems/lru-cache/
(Medium)
Design a data structure that follows the constraints of a Least Recently Used
(LRU) cache.
Implement the LRUCache class:
● LRUCache(int capacity) Initialize the LRU cache with positive size
capacity.
● int get(int key) Return the value of the key if the key exists, otherwise
return -1.
● void put(int key, int value) Update the value of the key if the key exists.
Otherwise, add the key-value pair to the cache. If the number of keys
exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.
Example 1:
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output[null, null, null, 1, null, -1, null, -1, 3, 4]'''


from typing import OrderedDict

class Lru:
    def __init__(self, capacity):
        self.dic =OrderedDict()
        self.capacity = capacity
    
    def get(self,key):
        if key not in self.dic:
            return -1
        v=self.dic.pop(key)
        self.dic[key]=v
        return v

    def put(self,key,value):
        if key in self.dic:
            self.dic.pop(key)
        elif len(self.dic) >= self.capacity:
            self.dic.popitem(last=False)
        self.dic[key]=value

lru=Lru(2)
lru.put(1,1)
lru.put(2,2)
print(lru.get(1))
lru.put(3,3)
print(lru.get(2))
lru.put(4,4)
print(lru.get(1))
print(lru.get(3))
print(lru.get(4))