'''
Q-2) Clone Graph
(7.5 marks)
https://leetcode.com/problems/clone-graph/
(Medium)
Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.Each node in the graph contains a value (int) and a list (List[Node]) of its
neighbors.
class Node {
public int val;
public List<Node> neighbors;
}'''

class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
        
def clone_graph(node):
    if node == None:
        return None

    vi = set()
    hm = {}

    def dfs(node, vi, hm):
        vi.add(node)
        copyNode = Node(node.val, [])
        hm[node] = copyNode

        for dest in node.neighbors:
            if dest not in vi:
                dfs(dest, vi, hm)

            copyNode.neighbors.append(hm[dest])

    dfs(node, vi, hm)

    return hm[node]

node=Node(2)
node.neighbour=Node(4)

print()