'''
Q-1 ) Q1. Represent a graph using adjacency list and adjacency matrix.
(5 marks)
(super-easy)
Don't just blindly copy the code, try to understand each line of code.
'''
#adjacent list

graph=dict()
def add_edge(sr,des,wt,directed):
   
    if sr not in graph:
        graph[sr]=[]
    graph[sr].append((des,wt))
    if not directed:
        if des not in graph:
            graph[des]=[]
        graph[des].append((sr,wt))


def bfs(src):
    visited=[False]*10
    queue=[]

    queue.append(src)
    visited[src]=True

    while len(queue)!=0:
        x=queue.pop(0)
        print(x)
        for neighbour,_ in graph[x]:
            if not visited[neighbour]:
                queue.append(neighbour)
                visited[neighbour]=True



add_edge(1,2,1,False)
add_edge(0,3,1,False)
add_edge(2,3,1,False)
add_edge(2,5,1,False)

print(bfs(2))
______________________________________________________________________

#adjacency matrix

n=5
graph=[[0 for i in range(n+1)]for j in range(n+1)]
def add_edge(sr,des,wt,directed):
    graph[sr][des]=wt
    if not directed:
        graph[des][sr]=wt

add_edge(1,2,1,False)
add_edge(0,3,1,False)
add_edge(2,3,1,False)
add_edge(2,5,1,False)

for i in range(n+1):
    for j in range(n+1):
        print(graph[i][j], end=" ")
    print()
    