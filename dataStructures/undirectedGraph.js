class undirectedGraph{
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex){
        if(!this.adjList[vertex]) this.adjList[vertex] = [];
    }

    addEdge(vertex1, vertex2){
        if(!this.adjList[vertex1] || !this.adjList[vertex2]) {
            return
        }
        this.adjList[vertex1].push(vertex2);
        this.adjList[vertex2].push(vertex1);
        return
    }

    removeVertex(vertex){
        if(!this.adjList[vertex]) return undefined
        const connectedVertices = this.adjList[vertex];
        for (const connectedVertex of connectedVertices) {
            const index = this.adjList[connectedVertex].indexOf(vertex);
            this.adjList[connectedVertex].splice(index, 1);
        }
        delete this.adjList[vertex];
        return vertex;
    }

    removeEdge(vertex1, vertex2){
        const index1 = this.adjList[vertex1].indexOf(vertex2);
        const index2 = this.adjList[vertex2].indexOf(vertex1);
        this.adjList[vertex1].splice(index1, 1);
        this.adjList[vertex2].splice(index2, 1);
    }

    //DFS: visit children of a node, before visiting siblings
    DFSrecursive(start){

        let results = [];
        let visited = {};

        const recursive = (vertex) => {
            if(!vertex) return null;
            results.push(vertex);
            visited[vertex] = true;

            for (const neighbor of this.adjList[vertex]) {
                if(!visited[neighbor]){
                    recursive(neighbor);
                }
            }
        }

        recursive(start);
        return results;
    }
}

let graph = new undirectedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'C');
graph.addEdge('A', 'B');
// graph.removeEdge('A', 'B');
// graph.removeVertex('E');
graph.DFSrecursive('Y');
console.log(graph);