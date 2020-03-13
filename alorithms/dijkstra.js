const { WeightedGraph } = require("../dataStructures/weightedGraph");
const { Node, PriorityQueue } = require("../dataStructures/priorityQueue");

class Dijkstra extends WeightedGraph {

    constructor(){
        super();
    }

    dijkstra = (start, end) => {

        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
        
        Object.keys(this.adjList).forEach(el =>{
            if (el === start) {
                distances[el] = 0;
                nodes.enqueue(el, 0);
            } else {
                distances[el] = Infinity;
                nodes.enqueue(el, Infinity)
            }
            previous[el] = null;
        })

        while (nodes.values.length) {
            smallest = graph.dequeue();

            if (smallest === end) return;
            //TODO build path

        }
    }
}

// WeightedGraph.prototype.dijkstra = (start, end) => {
//     const distances = {};
//     console.log(this.adjList.keys());
// }

let graph = new Dijkstra();
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
console.log(graph);
graph.dijkstra('A', 'E');