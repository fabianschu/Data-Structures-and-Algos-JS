class WeightedGraph {

    constructor(){
        this.adjList = {};
    }

    addVertex(vertex){
        if(!this.adjList[vertex]) this.adjList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
        if(!this.adjList[vertex1] || !this.adjList[vertex2]) {
            return undefined;
        }
        this.adjList[vertex1].push({vertex: vertex2, weight});
        this.adjList[vertex2].push({vertex: vertex1, weight});
        return 
    }

    dijkstra(start, end){
    }
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('E', 'F', 1);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);

module.exports.WeightedGraph = WeightedGraph;