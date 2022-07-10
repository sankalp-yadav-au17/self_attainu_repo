
def dfs(m, r, c, visited, total_to_visit, rows, cols):
    global paths
    if not (0 <= r < rows and 0 <= c < cols): return
    if m[r][c] == 2:
        if len(visited) == total_to_visit + 1:
            paths += 1
        return
    elif m[r][c] == -1:
        return
    elif (r, c) in visited:
        return
    visited.add((r, c))
    dfs(m, r + 1, c, visited, total_to_visit, rows, cols)
    dfs(m, r - 1, c, visited, total_to_visit, rows, cols)
    dfs(m, r, c + 1, visited, total_to_visit, rows, cols)
    dfs(m, r, c - 1, visited, total_to_visit, rows, cols)
    visited.discard((r, c))


grid=[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
rows = len(grid)
cols = len(grid[0])
total_to_visit = 0
for row in range(rows):
    for col in range(cols):
        if grid[row][col] == 0:
            total_to_visit += 1
        if grid[row][col] == 1:
            x, y = row, col
paths = 0
dfs(grid, x, y, set(), total_to_visit, rows, cols)
print(paths)

