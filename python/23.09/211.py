class Node:
    def __init__(self, key: str, word: str = None):
        self.key = key
        self.word = word
        self.children = dict()

class WordDictionary:
    def __init__(self):
        self.root = Node("")

    def addWord(self, word: str) -> None:
        node = self.root
        for x in word:
            if not node.children.get(x):
                node.children[x] = Node(x)
            node = node.children[x]
        else:
            node.word = word

    def search(self, word: str) -> bool:
        node = self.root
        q = collections.deque([])
        if node.children.get(word[0]):
            q.append((node.children.get(word[0]), 1))
        if word[0] == ".":
            q.extend([(node.children.get(k), 1) for k in node.children.keys()])
        while q:
            node, idx = q.popleft()
            if idx == len(word):
                if node.word:
                    return True
                continue
            
            if word[idx] == ".":
                q.extend([(node.children.get(k), idx+1) for k in node.children.keys()])
            elif node.children.get(word[idx]):
                q.append((node.children.get(word[idx]), idx+1))

        return False
