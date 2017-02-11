describe('graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', function() {
    expect(graph.addNode).to.be.a('function');
    expect(graph.contains).to.be.a('function');
    expect(graph.removeNode).to.be.a('function');
    expect(graph.hasEdge).to.be.a('function');
    expect(graph.addEdge).to.be.a('function');
    expect(graph.removeEdge).to.be.a('function');
    expect(graph.forEachNode).to.be.a('function');
  });

  it('should store values as nodes that were inserted', function() {
    graph.addNode(1);
    expect(graph.contains(1)).to.equal(true);
  });

  it('should remove nodes that were inserted', function() {
    graph.addNode(2);
    expect(graph.contains(2)).to.equal(true);
    graph.removeNode(2);
    expect(graph.contains(2)).to.equal(false);
  });

  it('should create edges between two nodes', function() {
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.addEdge(3, 2);
    expect(graph.hasEdge(3, 2)).to.equal(true);
    expect(graph.hasEdge(3, 1)).to.equal(false);
  });

  it('should remove edges between nodes', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should remove edges between nodes when a node is removed', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeNode(5);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should execute a callback on each node in the graph', function() {
    var connectToFive = function(item) {
      graph.addEdge(item.val, 5);
    };
    graph.addNode(5);
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.forEachNode(connectToFive);
    expect(graph.hasEdge(2, 5)).to.equal(true);
    expect(graph.hasEdge(1, 5)).to.equal(true);
    expect(graph.hasEdge(3, 5)).to.equal(true);
    expect(graph.hasEdge(5, 5)).to.equal(true);
  });


  it('should have a find function that locates a node and returns it', function() {
    for (var i = 1; i <= 8; i++) {
      graph.addNode(i); 
    }
    expect(graph.contains(4)).to.equal(true);
    expect(graph.findNode(4).val).to.equal(4);
    expect(graph.findNode(9)).to.equal(undefined);
  });

  it('should find the shortest path between two nodes and return the values on the way', function() {
    for (var i = 1; i <= 8; i++) {
      graph.addNode(i); 
    }
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(2, 5);
    graph.addEdge(5, 6);
    graph.addEdge(5, 7);
    expect(graph.findPath(1, 2)).to.eql([[2]]);
    expect(graph.findPath(1, 3)).to.eql([[3]]);
    expect(graph.findPath(3, 1)).to.eql([[1]]);
    expect(graph.findPath(1, 4)).to.eql([[2, 4]]);
    expect(graph.findPath(1, 6)).to.eql([[2, 5, 6]]);
  });
});
