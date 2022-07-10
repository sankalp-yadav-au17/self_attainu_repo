'''Q-3)All Paths From Source to Target
(5
marks)
https://leetcode.com/problems/all-paths-from-source-to-target/
(Easy)
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all
possible paths from node 0 to node n - 1, and return them in any order.
The graph is given as follows: graph[i] is a list of all nodes you can visit from
node i (i.e., there is a directed edge from node i to node graph[i][j]).
Example 1:
Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
'''


def dfs(sr,des,visited,cur):
    if sr==des:
        res.append(cur)
        return
    visited[sr]=True
    for neighbour in graph[sr]:
        # if not visited[neighbour]:
        # cur.append([neighbour])/\
        dfs(sr,des,visited,cur)
        
graph=[[4,3,1],[3,2,4],[3],[4],[]]
visited=[False]*(len(graph)-1)
res=[]
dfs(0,len(graph)-1,visited,[0])
print(res)