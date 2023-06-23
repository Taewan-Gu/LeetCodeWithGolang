class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        visited_A, visited_B = [], []
        for i in range(len(secret)):
            if secret[i] == guess[i]:
                visited_A.append(i)
                visited_B.append(i)
        
        for i in range(len(secret)):
            if i in visited_A:
                continue
            for j in range(len(guess)):
                if secret[i] == guess[j] and j not in visited_B:
                    visited_B.append(j)
                    break
                    
        return f"{len(visited_A)}A{len(visited_B)-len(visited_A)}B"
