class Solution:
    def simplifyPath(self, path: str) -> str:
        i, adj = 0, ""
        while i < len(path):
            if path[i] == "/" and (i+1 != len(path) and path[i+1] == "/"):
                i += 1
            else:
                adj += path[i]
                i += 1

        i, adj, path = 0, "", adj
        while i < len(path):
            if path[i] == "." and (i+1 != len(path) and path[i+1] == ".") and (i+2 == len(path) or path[i+2] == "/") and (i-1 == -1 or path[i-1] == "/"):
                i += 3
                if adj != "/":
                    adj = adj[:-len(adj.split("/")[-2])-1]
                continue
            if path[i] == "." and (i+1 == len(path) or path[i+1] == "/") and (i-1 == -1 or path[i-1] == "/"):
                i += 2
                continue
            adj += path[i]
            i += 1
        if len(adj) != 1 and adj[-1] == "/":
            adj = adj[:-1]

        return adj
