class Graph{
    constructor(){
        this.vertices = new Map();
    }

    addVertex(newVertex, edges){
        this.vertices.set(newVertex, edges);
    }

    addEdge(vertex, newVertex){

        let vertexConnections = this.vertices.get(vertex);
        vertexConnections.push(newVertex);

        let newVertexConnections = this.vertices.get(newVertex);
        newVertexConnections.push(vertex);
    }

    removeVertex(verticesArray, deleteEl){
        verticesArray.forEach(el => {
            let edges = this.vertices.get(el);
            if (typeof index != 'undefined') {
                let index = edges.indexOf(deleteEl);
                edges.splice(index, 1);
            }
        })
        this.vertices.delete(deleteEl);
    }

    findMaxCliqueGreedy(){
        let clique = [];
        let vertices = Array.from(this.vertices.keys());
        const rnd = Math.floor(Math.random() * vertices.length);

        clique.push(vertices[rnd]);

        for (let i = 0; i < vertices.length; i++) {
            if(clique.includes(vertices[i])){
                continue;
            }
            let isNext = true;
            for (let j = 0; j < clique.length; j++) {
                if (this.vertices.get(vertices[i]).includes(clique[j])){
                    continue;
                } else {
                    isNext = false;
                    break;
                }
            }
            if (isNext) {
                clique.push(vertices[i]);
            }
        }
        return clique;
    }
}

const graph = new Graph();
graph.addVertex('A', ['B', 'D']);
graph.addVertex('B', ['A', 'D']);
graph.addVertex('C', ['B']);
graph.addVertex('D', ['B', 'D']);
console.log(graph.findMaxCliqueGreedy());