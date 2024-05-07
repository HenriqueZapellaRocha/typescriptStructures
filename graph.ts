import { linkedList } from './linkedList';

export class graph<T> {

    private edges: Map<T, linkedList<T>>
    private vertices: Set<T>
    private verticesQuantity: number
    private edgesQuantity: number

    constructor() {
        this.edges = new Map <T, linkedList<T>>()
        this.vertices = new Set<T>()
        this.verticesQuantity = 0
        this.edgesQuantity = 0
    }

    get getVerticesQuantity() {
        return this.verticesQuantity
    }

    get getEdgesQuantity() {
        return this.edgesQuantity
    }

    get getEdges() {
        return this.edges
    }

    get getVertices() {
        return this.vertices
    }

    public getList(value: T) {
        return this.edges.get(value)
    }

    public add(start: T, final: T): void {

        this.addEdges(start, final)

        if(!this.vertices.has(start)) {
            this.vertices.add(start)
            this.verticesQuantity++
        }

        if(!this.vertices.has(final)) {
            this.vertices.add(final)

        }
    }

    private addEdges(start: T, final: T) : void {

        let list = this.edges.get(start)

        if(list === undefined) {
            list = new linkedList<T>()
        }

        list.add(final)
        this.edges.set(start, list)

    }

    public dfs(value: T) {
        let visited = new Set<T>()
        this.dfsSearch(visited, value)
    }

    private dfsSearch(visited: Set<T>, actualVertex: T) {
        visited.add(actualVertex);
        console.log(actualVertex);
    
        const adjacentVertices = this.getList(actualVertex);
        if (adjacentVertices) {
            let actualNode = adjacentVertices.getHead
            while(actualNode !== null) {
                if(!visited.has(actualNode.getValue)) {
                    this.dfsSearch(visited, actualNode.getValue)
                } else{
                    actualNode = actualNode.getNextNode
                }
            }
        }
    }
    
}