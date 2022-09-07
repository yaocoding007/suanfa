class Node {
    constructor(data) {
        this.data = data
        this.pre = null
        this.next = null
    }
}

class SingleList {
    constructor() {
        this.size = 0
        this.head = new Node('head')
        this.currNode = ''
    }
}