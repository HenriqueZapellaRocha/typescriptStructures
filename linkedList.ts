class node<T> {

    private value: T;
    private nextNode: node<T> | null;

    constructor(value: T) {

        this.value = value;
        this. nextNode = null;
    }
    
    get getValue() {

        return this.value;
    }

    get getNextNode(): node<T> | null {

        return this.nextNode;
    }


    addNextNode(node: node<T> | null) {
        if(node !== null)
        this.nextNode = node;
    }

    removeNextNode() {
        this.nextNode = null
    }


}

export class linkedList<T>{

    private size: number;
    private head: node<T> | null;
    private tail: node<T> | null;


    constructor() {

        this.head = null
        this.tail = null
        this.size = 0;
    }


    public add(value: T): void{
       
        
        if(this.head === null) {

            this.head = new node(value)
            this.tail = this.head; const newNode = new node(value);
            this.size++
        } else if(this.tail !== null) {

            this.tail.addNextNode(new node(value))
            this.tail = this.tail.getNextNode
            this.size++
        }

    }

    public remove(value: T) : boolean {
        let previousNode: node <T> | null = null
        let actualNode = this.head

        while(actualNode !== null) {
            if(value === actualNode?.getValue && actualNode === this.head) {

                this.head = this.head.getNextNode
                this.size--
                return true
            } else if(value === actualNode?.getValue && actualNode === this.tail) {
                this.tail = previousNode
                previousNode?.removeNextNode()
                this.size--
                return true
            } else if (value === actualNode?.getValue) {

                let nextNode = actualNode.getNextNode
                previousNode?.addNextNode(nextNode)
                actualNode.removeNextNode
                this.size--
                return true
            }

        previousNode = actualNode;
        actualNode = actualNode.getNextNode;
        }

        return false
    }

    public print(node: node<T> | null) {
       
        if(node != null){

            console.log("value: ",node.getValue, "nextnode: ",node.getNextNode?.getValue)
            this.print(node.getNextNode);
        }
    }

    get getHead(): node<T> | null {
        return this.head
    }

    get getTail() {
        return this.tail;
    }

    get getSize(): number {
        return this.size;
    }
}

