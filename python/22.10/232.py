class Node:
    def __init__(self, val):
        self.before = None
        self.val = val
        self.after = None

class MyQueue:

    def __init__(self):
        self.head = None
        self.tail = None

    def push(self, x: int) -> None:
        node = Node(x)
        if self.head == None:
            self.head = node
        if self.tail:
            self.tail.after = node
            node.before = self.tail
        self.tail = node

    def pop(self) -> int:
        if self.head == None:
            return None
        
        if self.head == self.tail:
            self.tail = None
        
        val = self.head.val
        self.head = self.head.after
        
        return val

    def peek(self) -> int:
        if self.head == None:
            return None
        
        return self.head.val

    def empty(self) -> bool:
        return self.tail == None
            


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()