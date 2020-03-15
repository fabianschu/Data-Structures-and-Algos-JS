const { WeightedGraph } = require("../dataStructures/weightedGraph");
const { Node, PriorityQueue } = require("../dataStructures/priorityQueue");
// class PriorityQueue {
//     constructor(){
//       this.values = [];
//     }
//     enqueue(val, priority) {
//       this.values.push({val, priority});
//       this.sort();
//     };
//     dequeue() {
//       return this.values.shift();
//     };
//     sort() {
//       this.values.sort((a, b) => a.priority - b.priority);
//     };
//   }

class Dijkstra extends WeightedGraph {

    constructor(){
        super();
    }

    dijkstra = (start, end) => {

        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const visited = {};

        //returned in the end
        let path = [];

        //initialize distances, priority queue, previous and visited
        Object.keys(this.adjList).forEach(el =>{
            if (el === start) {
                distances[el] = 0;
                nodes.enqueue(el, 0);
            } else {
                distances[el] = Infinity;
                //nodes.enqueue(el, Infinity)
            }
            previous[el] = null;
            visited[el] = false;
        })

        //as long as the priority queue is not empty
        while (nodes.values.length) {

            //pick node with highest prio
            const current = nodes.dequeue().val;
            

            if (current === end) {

                let tmp = current;

                while (tmp !== start) {
                    path.push(previous[tmp]);
                    tmp = previous[tmp];
                }

                return path.reverse();
            };
        
            //get all neighbors of that node
            const neighbors = graph.adjList[current];

            //and for each neighbor 
            for (const neighbor of neighbors) {

                const neighborVal = neighbor.vertex;

                const distNeighCurr = neighbor.weight;
                const distCurrStart = distances[current];
                const distNeighStart = distNeighCurr + distCurrStart;
                
                //check its current distance to the start node
                if (distNeighStart < distances[neighborVal]) {
                    distances[neighborVal] = distNeighStart;
                    previous[neighborVal] = current;
                    nodes.enqueue(neighborVal, distNeighStart);
                }
            }
        }
    }
}

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

console.log(graph.dijkstra('A', 'E'));
