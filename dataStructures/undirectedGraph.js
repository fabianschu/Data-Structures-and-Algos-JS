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

        if(!this.adjList[start]) return null;

        let results = [];
        let visited = {};

        const recursive = (vertex) => {
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

    DFSiterative(start){

        if(!this.adjList[start]) return null;

        let results = [start];
        let visited = {};
        let stack = [];

        while (stack[0]) {
            const vertex = stack.pop();
            if(!visited[vertex]) {
                results.push(vertex);
                visited[vertex] = true;
                for (const neighbor of this.adjList[vertex]) {
                    stack.push(neighbor);
                }
            }
        }
        console.log(results);
        return results;
    }

    //BFS: visit siblings before children
    
    BFS (start) {

        if(!this.adjList[start]) return null;

        let results = [];
        let visited = {};
        visited[start] = true;
        let queue = [start];

        while (queue[0]) {
            const vertex = queue.shift();
            results.push(vertex);

            for (const neighbor of this.adjList[vertex]) {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        console.log('res: ', results);
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
//graph.DFSrecursive('Y');
graph.BFS('A');
console.log(graph);