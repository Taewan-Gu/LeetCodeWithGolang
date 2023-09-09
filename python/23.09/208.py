class Node:
    def __init__(self, key: str, word: str = None):
        self.key = key
        self.word = word
        self.children = dict()

class Trie:
    def __init__(self):
        self.root = Node("")

    def insert(self, word: str) -> None:
        node = self.root
        for x in word:
            if not node.children.get(x):
                node.children[x] = Node(x)
            node = node.children[x]
        else:
            node.word = word

    def search(self, word: str) -> bool:
        node = self.root
        for x in word:
            if not node.children.get(x):
                break
            node = node.children[x]
        else:
            if node.word == word:
                return True
        return False

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for x in prefix:
            if not node.children.get(x):
                break
            node = node.children[x]
        else:
            return True
        return False
