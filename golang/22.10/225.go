type Node struct {
    Val int
    Before *Node
}

type MyStack struct {
    Last *Node
}


func Constructor() MyStack {
    return *new(MyStack)
}


func (this *MyStack) Push(x int)  {
    a := new(Node)
    a.Val = x
    a.Before = this.Last
    this.Last = a
}


func (this *MyStack) Pop() int {
    res := this.Last
    
    if this.Last != nil {
        this.Last = this.Last.Before
    }
    
    return res.Val
}


func (this *MyStack) Top() int {
    return this.Last.Val
}


func (this *MyStack) Empty() bool {
    if this.Last != nil {
        return false
    }
    
    return true
}


/**
 * Your MyStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.Empty();
 */